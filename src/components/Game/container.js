import React, { Component } from 'react';
import {
  GraphRequest,
  GraphRequestManager,
  LoginManager
} from 'react-native-fbsdk';
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
      points: 0
    };
  }

  async componentDidMount() {
    // await this._publishScore('5');
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
            string: score
          }
        }
      },
      this._responseInfoCallback
    );

    new GraphRequestManager().addRequest(infoRequest).start();
  };

  _responseInfoCallback = (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
  };

  handleTouch = hit => {
    const action = {};
    if (hit) {
      action.points = ++this.state.points;
    } else {
      action.lives = --this.state.lives;
    }
    this.setState({ ...action });
  };

  handleTryAgain = () => {
    this.setState({ lives: 3, points: 0 });
  };

  render() {
    return (
      <Game
        lives={this.state.lives}
        points={this.state.points}
        onTouch={this.handleTouch}
        onTryAgain={this.handleTryAgain}
      />
    );
  }
}

export default connect(mapStateToProps)(GameContainer);
