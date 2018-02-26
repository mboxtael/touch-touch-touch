import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Image
} from 'react-native';

const Umpa = ({ fill, showCoins, onPress }) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={styles.umpa}>
      {fill ? (
        <Image
          style={{
            opacity: showCoins ? 1 : 0,
            resizeMode: 'center'
          }}
          source={require('../../../images/coin.png')}
        />
      ) : null}
    </View>
  </TouchableNativeFeedback>
);

const Board = ({ positions, showCoins, onPressUmpa }) => (
  <View style={styles.board}>
    {positions.map((position, i) => (
      <View style={styles.line} key={i}>
        {position.map((fill, j) => (
          <Umpa
            fill={fill}
            showCoins={showCoins}
            onPress={() => onPressUmpa(i, j)}
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
