import React, { Component } from 'react';
import { connect } from 'react-redux';
import Root from './component';

const mapStateToProps = ({ player }) => ({ player });

class RootContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Root {...this.props} />
  }
}

export default connect(mapStateToProps)(RootContainer);