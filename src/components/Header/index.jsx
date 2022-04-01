import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormExpense from '../FormExpense';
import HeaderContainer from './style';

class Header extends Component {
  render() {
    const { email } = this.props;
    const inicial = 0;
    return (
      <HeaderContainer>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">{inicial}</span>
        <span data-testid="header-currency-field">BRL</span>
        <FormExpense />

      </HeaderContainer>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
