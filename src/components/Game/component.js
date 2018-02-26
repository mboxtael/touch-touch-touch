import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Board from './Board';

const Game = props => (
  <View style={styles.game}>
    <Text>Touch!</Text>
    {props.lives > 0 ? (
      <Board onTouch={props.onTouch} />
    ) : (
      <View>
        <Text>You lose!</Text>
        <Button onPress={props.onTryAgain} title="Try Again" />
        <Link to="/">
          <Text>Menu</Text>
        </Link>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  game: {
    flex: 1,
    backgroundColor: 'powderblue'
  }
});

export default Game;
