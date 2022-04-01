import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormExpense from '../FormExpense';
import HeaderContainer from './style';

class Header extends Component {
  render() {
    const { email, totalR$ } = this.props;
    return (
      <HeaderContainer>
        <span data-testid="email-field">{email}</span>

        <span
          data-testid="header-currency-field"
        >
          <span data-testid="total-field">
            {totalR$.toFixed(2)}
          </span>
          BRL
        </span>
        <FormExpense />

      </HeaderContainer>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalR$: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalR$: state.wallet.totalR$,
});

export default connect(mapStateToProps)(Header);
