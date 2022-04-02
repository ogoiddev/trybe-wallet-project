import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import Header from '../components/Header';
import TableOfExpenses from '../components/TableOfExpenses';
import { actionFetchToSaveCurrencies } from '../actions';
import * as S from '../components_Styled/ContainersPage';

class Wallet extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actionFetchToSaveCurrencies());
  }

  render() {
    return (
      <S.ContainerWallet>
        <Header />
        <TableOfExpenses />
      </S.ContainerWallet>
    );
  }
}

Wallet.propTypes = {
  dispatch: func.isRequired,
};

export default connect()(Wallet);
