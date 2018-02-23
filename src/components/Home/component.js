import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Login from '../Login';

const Home = ({ player }) => (
  <View>
    {player.accessToken && (
      <View>
        <Link to="/game"><Text>Play</Text></Link>
        <Link to="/scores"><Text>Friend's scores</Text></Link>        
      </View>
    )}
    <Login player={player} />
  </View>
);

export default Home;