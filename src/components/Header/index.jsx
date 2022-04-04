import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormExpense from '../FormExpense';
import * as S from './style';
import logo from '../../images/logo_wallet.png';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const total = expenses
      .reduce((acc, { value, currency, exchangeRates }) => (
        acc + value * exchangeRates[currency].ask), 0);
    return (
      <S.Container>
        <S.HeaderContainer>
          <span>
            <img
              className="logo"
              src={ logo }
              alt="Logo da e-wallet"
            />

          </span>
          <span data-testid="email-field">{email}</span>
          <span data-testid="header-currency-field">
            <span>R$ </span>
            <span data-testid="total-field">
              {new Intl.NumberFormat().format(total.toFixed(2))}
            </span>
            {' - (BRL)'}
          </span>
        </S.HeaderContainer>
        <FormExpense />

      </S.Container>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
