import React from 'react';
import { connect } from 'react-redux';
import * as S from '../components/globalStyled';
import actionSaveLogin from '../Store/actions';

const LENGTH_MIN_PASS = 6;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      emailValue: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    if (name === email) {
      this.setState({ emailValue: value });
    }
    if (name === 'password' && value.length >= LENGTH_MIN_PASS) {
      this.setState({ isDisabled: false });
    }
  }

  render() {
    const { isDisabled, emailValue } = this.state;
    const { saveLogin } = this.props;
    return (
      <S.FormExpense>
        <S.Input
          name="email"
          type="email"
          data-testid="email-input"
          required
        />
        <S.Input
          name="password"
          type="password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <S.Button
          disabled={ isDisabled }
          type="submit"
          onClick={ () => saveLogin(emailValue) }
        >
          Entrar

        </S.Button>
      </S.FormExpense>
    );
  }
}

Login.propTypes = {
  saveLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveLogin: (email) => dispatch(actionSaveLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
