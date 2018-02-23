import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { NativeRouter } from 'react-router-native';
import player from './src/reducers/player';
import Root from './src/components/Root';
import { View, StyleSheet } from 'react-native';

const reducer = combineReducers({ player });
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}