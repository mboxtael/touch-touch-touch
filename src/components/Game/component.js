import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Board from './Board';

const Game = props => (
  <View style={styles.game}>
    <Text style={styles.brand}>Touch, Touch, Touch!</Text>
    <View style={styles.statusBar}>
      <Text style={styles.textBar}>Lives: {props.lives}</Text>
      <Text style={styles.textBar}>POINTS: {props.points}</Text>
    </View>
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
    padding: 15
  },
  board: {
    flex: 1,
    backgroundColor: 'rgba(228, 228, 228, 0.5)',
    borderRadius: 5
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textBar: {
    fontWeight: 'bold'
  },
  brand: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: '500',
    alignSelf: 'center'
  }
});

export default Game;
