import React from 'react';
import { LoginButton } from 'react-native-fbsdk';

const Login = ({ onLoginFinished, onLogoutFinished }) => (
  <LoginButton
    readPermissions={['user_friends', 'public_profile']}
    onLoginFinished={onLoginFinished}
    onLogoutFinished={onLogoutFinished}
  />
);

export default Login;
