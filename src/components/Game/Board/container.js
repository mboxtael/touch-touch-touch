import React, { Component } from 'react';
import Board from './component';
import { random } from 'lodash';

export default class BoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positions: this._generatePositions(5, 5)
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
    this.props.onTouch(this.state.positions[i][j]);
    this.setState({
      positions: this._generatePositions(5, 5)
    });
  };

  render() {
    return (
      <Board
        positions={this.state.positions}
        onPressUmpa={this.handlePressUmpa}
      />
    );
  }
}
