import React from 'react';
import { View, Text, FlatList } from 'react-native';

const Scores = ({ scores }) => (
  <View>
    <Text>Friend's Scores</Text>
    <FlatList
      data={scores}
      renderItem={({ item, index }) => (
        <Text key={index}>
          {item.user.name} - {item.score}
        </Text>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
);

export default Scores;
