import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import Header from '../components/Header';
import Content from '../components/Content';
import { actionFetchToSaveCurrencys } from '../actions';

class Wallet extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actionFetchToSaveCurrencys());
  }

  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

Wallet.propTypes = {
  dispatch: func.isRequired,
};

export default connect()(Wallet);
