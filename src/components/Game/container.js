import React, { Component } from 'react';
import {
  GraphRequest,
  GraphRequestManager,
  LoginManager
} from 'react-native-fbsdk';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { includes } from 'lodash';
import Game from './component';

const mapStateToProps = ({ player }) => ({
  player: player
});

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lives: 3,
      points: 0,
      isLoading: false
    };
  }

  _publishScore = async score => {
    const { permissions } = this.props.player.fbData;

    if (!includes(permissions, 'publish_actions')) {
      try {
        const result = await LoginManager.logInWithPublishPermissions([
          'publish_actions'
        ]);

        if (result.isCancelled) {
          throw true;
        }
      } catch (error) {
        alert('There is an error with publish permission');
        return;
      }
    }

    const infoRequest = new GraphRequest(
      `/${this.props.player.fbData.userID}/scores`,
      {
        accessToken: this.props.player.accessToken,
        httpMethod: 'POST',
        parameters: {
          score: {
            string: score.toString()
          }
        }
      },
      this._responseInfoCallback
    );

    this.setState({ isLoading: !this.state.isLoading });
    new GraphRequestManager().addRequest(infoRequest).start();
  };

  _responseInfoCallback = (error, result) => {
    this.setState({ isLoading: !this.state.isLoading });
  };

  _getScore = async =>
    new Promise((resolve, reject) => {
      const infoRequest = new GraphRequest(
        `/${this.props.player.fbData.userID}/scores`,
        {
          accessToken: this.props.player.accessToken
        },
        (error, result) => {
          if (error) {
            reject();
          } else {
            resolve(result.data[0].score);
          }
        }
      );

      new GraphRequestManager().addRequest(infoRequest).start();
    });

  handleTouch = hit => {
    const action = {};
    if (hit) {
      action.points = ++this.state.points;
    } else {
      action.lives = --this.state.lives;
    }
    this.setState({ ...action }, async () => {
      if (this.state.lives == 0) {
        const prevScore = await this._getScore();
        if (this.state.points > prevScore) {
          await this._publishScore(this.state.points);
        }
      }
    });
  };

  handleTryAgain = () => {
    this.setState({ lives: 3, points: 0 });
  };

  render() {
    return !this.state.isLoading ? (
      <Game
        lives={this.state.lives}
        points={this.state.points}
        onTouch={this.handleTouch}
        onTryAgain={this.handleTryAgain}
      />
    ) : (
      <ActivityIndicator />
    );
  }
}

export default connect(mapStateToProps)(GameContainer);
