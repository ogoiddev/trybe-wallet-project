import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as S from '../components_Styled/FormElements';
import { actionTo, SAVE_LOGIN } from '../actions';

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
    dispatch(actionTo(SAVE_LOGIN, email));
    history.push('/carteira');
  }

  render() {
    const { isDisabled } = this.state;
    return (
      <S.Container>

        <S.Form name="loginForm">
          <S.Input
            name="email"
            type="email"
            data-testid="email-input"
            placeholder="Digite seu email"
            onChange={ this.handleChange }
            required
          />
          <S.Input
            name="password"
            type="password"
            data-testid="password-input"
            placeholder="Digite sua senha"
            onChange={ this.handleChange }
          />
          <S.Button
            name="loginBtn"
            disabled={ isDisabled }
            type="submit"
            onClick={ this.handleClickToLogin }
          >
            Entrar
          </S.Button>
        </S.Form>

      </S.Container>
    );
  }
}

Login.propTypes = {
  saveLogin: PropTypes.func,
  history: PropTypes.shape({ push: PropTypes.func }),
}.isRequired;

export default connect()(Login);
