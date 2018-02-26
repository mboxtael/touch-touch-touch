import React, { Component } from 'react';
import Board from './component';
import { random } from 'lodash';

export default class BoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positions: this._generatePositions(5, 5),
      showCoins: false
    };
  }

  _generatePositions = (rows, cols) => {
    const positions = [];
    for (let i = 0; i < rows; i++) {
      positions[i] = [];
      for (let j = 0; j < cols; j++) {
        positions[i][j] = random(1);
      }
    }
    return positions;
  };

  handlePressUmpa = (i, j) => {
    if (this.state.showCoins) {
      return;
    }
    
    this.props.onTouch(this.state.positions[i][j]);
    this.setState({ showCoins: true }, () => {
      setTimeout(() => {
        this.setState({
          showCoins: false,
          positions: this._generatePositions(5, 5)
        });
      }, 1000);
    });
  };

  render() {
    return (
      <Board
        showCoins={this.state.showCoins}
        positions={this.state.positions}
        onPressUmpa={this.handlePressUmpa}
      />
    );
  }
}
