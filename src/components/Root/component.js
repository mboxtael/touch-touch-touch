import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Route, NativeRouter, AndroidBackButton } from 'react-router-native';
import Home from '../Home';
import Scores from '../Scores';
import Game from '../Game';

const Root = ({ player }) => (
  <NativeRouter>
    <AndroidBackButton>
      <View style={styles.container}>
        <Route exact path="/" render={props => <Home player={player} />} />
        <Route path="/scores" component={Scores} />
        <Route path="/game" component={Game} />
      </View>
    </AndroidBackButton>
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});

export default Root;
