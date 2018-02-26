import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { setPlayer } from '../../actions/player';
import Scores from './component';

const mapStateToProps = ({ player }) => ({
  player: player
});
const mapDispatchToProps = { setPlayer };

class ScoresContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    const infoRequest = new GraphRequest(
      '/567944576917184/scores',
      { accessToken: this.props.player.accessToken },
      this._responseInfoCallback
    );

    new GraphRequestManager().addRequest(infoRequest).start();
  }

  _responseInfoCallback = (error, result) => {
    if (error) {
      console.log(error);
    } else {
      this.props.setPlayer({ friendsScores: result.data });
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <Scores
        isLoading={this.state.isLoading}
        scores={this.props.player.friendsScores}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoresContainer);
