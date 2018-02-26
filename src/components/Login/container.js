import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AccessToken } from 'react-native-fbsdk';
import { Redirect } from 'react-router-native';
import { setPlayer } from '../../actions/player';
import { LoginButton } from 'react-native-fbsdk';
import { ActivityIndicator } from 'react-native';

const mapDispatchToProps = { setPlayer };

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  async componentDidMount() {
    const data = await AccessToken.getCurrentAccessToken();
    if (data) {
      this.props.setPlayer({
        accessToken: data.accessToken.toString(),
        fbData: data
      });
    }
    this.setState({ isLoading: false });
  }

  handleLoginFinished = (error, result) => {
    if (error) {
      alert('login has error: ' + result.error);
    } else if (result.isCancelled) {
      alert('login is cancelled.');
    } else {
      AccessToken.getCurrentAccessToken().then(data => {
        this.props.setPlayer({
          accessToken: data.accessToken.toString(),
          fbData: data
        });
      });
    }
  };

  handleLogoutFinished = () => {
    alert('logout.');
  };

  render() {
    return this.state.isLoading ? (
      <ActivityIndicator />
    ) : (
      <LoginButton
        readPermissions={['user_friends', 'public_profile']}
        onLoginFinished={this.handleLoginFinished}
        onLogoutFinished={this.handleLogoutFinished}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer);
