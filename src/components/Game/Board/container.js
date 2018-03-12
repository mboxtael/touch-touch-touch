import React, { Component } from 'react';
import Board from './component';
import { random } from 'lodash';
import { setInterval } from 'core-js';

export default class BoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { positions: [], intervalId: null, disable: true };
  }

  componentDidMount() {
    const intervalId = setInterval(this._updateBoardPositions, 1000);
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
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

  _updateBoardPositions = () => {
    this.setState({
      positions: this._generatePositions(5, 5),
      disable: false
    });
  };

  handlePressUmpa = (i, j) => {
    this.setState({ disable: true });
    this.props.onTouch(this.state.positions[i][j]);
  };

  render() {
    return (
      <Board
        disable={this.state.disable}
        positions={this.state.positions}
        onPressUmpa={this.handlePressUmpa}
      />
    );
  }
}
