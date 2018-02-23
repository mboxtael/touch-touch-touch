import React, { Component } from 'react';
import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import Game from './component';

const mapStateToProps = ({ player }) => ({
  player: player
});

class GameContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.player);
    const infoRequest = new GraphRequest(
      `/${this.props.player.userID}/scores`,
      {
        accessToken: this.props.player.accessToken,
        httpMethod: 'POST',
        parameters: {
          score: {
            string: '5'
          }
        }
      },
      this._responseInfoCallback
    );

    new GraphRequestManager().addRequest(infoRequest).start();
  }

  _responseInfoCallback = (error, result) => {
    console.log('callback', error, result);
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
  };

  render() {
    return <Game />;
  }
}

export default connect(mapStateToProps)(GameContainer);
