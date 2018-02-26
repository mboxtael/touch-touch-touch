import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const Umpa = ({ children, onPress }) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={styles.umpa}>{children}</View>
  </TouchableNativeFeedback>
);

const Board = ({ positions, onPressUmpa }) => (
  <View style={styles.board}>
    {positions.map((position, i) => (
      <View style={styles.line} key={i}>
        {position.map((inner, j) => (
          <Umpa onPress={() => onPressUmpa(i, j)} key={`${i}${j}`}>
            <Text>{inner}</Text>
          </Umpa>
        ))}
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  board: {
    flex: 1,
    justifyContent: 'center'
  },
  umpa: {
    flex: 1,
    backgroundColor: 'steelblue',
    borderWidth: 1
  },
  line: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default Board;
