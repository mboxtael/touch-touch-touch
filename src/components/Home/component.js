import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Login from '../Login';

const Home = ({ player }) => (
  <View style={styles.menu}>
    <Text style={styles.brand}>Touch, Touch, Touch!</Text>
    {player.accessToken && (
      <View>
        <Link to="/game">
          <Text>Play</Text>
        </Link>
        <Link to="/scores">
          <Text>Friend's scores</Text>
        </Link>
      </View>
    )}
    <Login player={player} />
  </View>
);

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  brand: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: '500'
  }
});

export default Home;
