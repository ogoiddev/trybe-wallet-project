import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as S from '../components_Styled/FormElements';
import { actionSaveLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      userAsk: {
        email: '',
        password: '',
      },
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(({ userAsk }) => ({ userAsk: { ...userAsk, [name]: value } }),
      this.formValidation);
  }

  formValidation = () => {
    const LENGTH_MIN_PASS = 6;
    const { userAsk: { email, password } } = this.state;
    const itIs = this.emailToValidate(email) && (password.length >= LENGTH_MIN_PASS);
    this.setState({ isDisabled: !itIs });
  }

  // https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex //
  emailToValidate = (email) => {
    const reG = /\S+@\S+\.\S+/;
    return reG.test(email);
  }

  handleClickToLogin = (e) => {
    e.preventDefault();
    const { userAsk: { email } } = this.state;
    const { history, dispatch } = this.props;
    dispatch(actionSaveLogin(email));
    history.push('/carteira');
  }

  render() {
    const { isDisabled } = this.state;
    return (
      <S.Form>
        <S.Input
          name="email"
          type="email"
          data-testid="email-input"
          onChange={ this.handleChange }
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
          onClick={ this.handleClickToLogin }
        >
          Entrar
        </S.Button>

      </S.Form>
    );
  }
}

Login.propTypes = {
  saveLogin: PropTypes.func,
  history: PropTypes.shape({ push: PropTypes.func }),
}.isRequired;

export default connect()(Login);
