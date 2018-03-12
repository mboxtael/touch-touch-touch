import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image
} from 'react-native';

const Umpa = ({ fill, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.umpa}>
      {fill ? (
        <Image
          style={{
            resizeMode: 'center'
          }}
          source={require('../../../images/coin.png')}
        />
      ) : null}
    </View>
  </TouchableWithoutFeedback>
);

const Board = ({ positions, disable, onPressUmpa }) => (
  <View style={styles.board}>
    {positions.map((position, i) => (
      <View style={styles.line} key={i}>
        {position.map((fill, j) => (
          <Umpa
            fill={fill}
            onPress={() => !disable && onPressUmpa(i, j)}
            key={`${i}${j}`}
          />
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  line: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default Board;
