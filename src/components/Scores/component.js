import React from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

const Scores = ({ scores, isLoading }) => (
  <View style={styles.scores}>
    <Text style={styles.title}>Friend's Scores</Text>
    {!isLoading ? (
      <FlatList
        data={scores}
        renderItem={({ item, index }) => (
          <Text style={styles.score} key={index}>
            {item.user.name} - {item.score}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    ) : (
      <ActivityIndicator />
    )}
  </View>
);

const styles = StyleSheet.create({
  scores: {
    flex: 1,
    alignItems: 'center',
    padding: 15
  },
  title: {
    fontSize: 25
  },
  score: {
    fontSize: 15
  }
});

export default Scores;
