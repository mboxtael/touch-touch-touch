import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Board from './Board';

const Game = props => (
  <View style={styles.game}>
    <Text>Touch!</Text>
    <Text>Lives: {props.lives}</Text>
    <Text>Points: {props.points}</Text>
    {props.lives > 0 ? (
      <View style={styles.board}>
        <Board onTouch={props.onTouch} />
      </View>
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
    backgroundColor: 'steelblue'
  },
  board: {
    flex: 1,
    margin: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5
  }
});

export default Game;
