import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, string, func } from 'prop-types';
import * as S from '../../components_Styled/FormElements';
import { actionFetchToSaveExpenses } from '../../actions';

class FormExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: {
        value: '',
      },
    };
  }

  handleClickToSaveExpense = async (e) => {
    e.preventDefault();
    this.setState({ expense: { value: '' } });
    const { dispatch } = this.props;
    const { expense } = this.state;
    dispatch(actionFetchToSaveExpenses(expense));
  }

  handleChangeExpense = ({ target: { name, value } }) => {
    this.setState(({ expense }) => ({
      expense: { ...expense, [name]: value } }));
  }

  render() {
    const { currenciesCode } = this.props;
    const { expense: { value } } = this.state;
    return (
      <S.Form name="expenseForm">
        <S.Input
          value={ value }
          name="value"
          onChange={ this.handleChangeExpense }
          data-testid="value-input"
          type="number"
          placeholder="R$"
        />
        <S.TextArea
          name="description"
          onChange={ this.handleChangeExpense }
          data-testid="description-input"
        />
        <S.Label>
          Moeda
          <S.Select
            required
            name="currency"
            onChange={ this.handleChangeExpense }
          >
            {currenciesCode.map((each) => (
              <option key={ each }>{each}</option>
            ))}
          </S.Select>
        </S.Label>
        <S.Select
          name="method"
          onChange={ this.handleChangeExpense }
          data-testid="method-input"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </S.Select>
        <S.Select
          name="tag"
          onChange={ this.handleChangeExpense }
          data-testid="tag-input"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </S.Select>
        <S.Button
          onClick={ this.handleClickToSaveExpense }
          type="submit"
        >
          Adicionar despesa

        </S.Button>
      </S.Form>
    );
  }
}

FormExpense.propTypes = {
  currenciesCode: arrayOf(string),
  dispatch: func,
}.isRequired;

const mapStateToProps = (state) => ({
  currenciesCode: state.wallet.currencies,
  currenciesInfo: state.wallet.currenciesInfo,
});

export default connect(mapStateToProps)(FormExpense);
