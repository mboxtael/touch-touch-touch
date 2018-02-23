import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { Redirect } from 'react-router-native';
import { setPlayer } from '../../actions/player';
import Login from './component';
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
      this.props.setPlayer({ accessToken: data.accessToken.toString() });
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
          userID: data.userID
        });
      });
      // LoginManager.logInWithReadPermissions(['user_friends']).then(
      //   result => {
      //     if (result.isCancelled) {
      //       alert('Login cancelled');
      //     } else {
      //       alert(
      //         'Login success with permissions: ' +
      //           result.grantedPermissions.toString()
      //       );
            
      //     }
      //   },
      //   error => {
      //     alert('Login fail with error: ' + error);
      //   }
      // );
    }
  };

  handleLogoutFinished = () => {
    alert('logout.');
  };

  render() {
    return this.state.isLoading ? (
      <ActivityIndicator />
    ) : (
      <Login
        onLoginFinished={this.handleLoginFinished}
        onLogoutFinished={this.handleLogoutFinished}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer);
