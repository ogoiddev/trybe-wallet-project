import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, string, func } from 'prop-types';
import * as S from '../../components_Styled/FormElements';
import { actionFetchToSaveExpenses } from '../../actions';

const INITIAL_STATE = {
  value: '',
  description: '',
  tag: 'Selecionar',
  currency: '',
  method: '',
};

class FormExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: { ...INITIAL_STATE },
      isDisabled: true,
    };
  }

  componentDidMount() {
    this.setState(({ expense }) => ({
      isDisabled: expense.value.length <= 1,
    }));
  }

  handleClickToSaveExpense = async (e) => {
    e.preventDefault();
    this.setState({ expense: { ...INITIAL_STATE } });
    const { dispatch } = this.props;
    const { expense } = this.state;
    dispatch(actionFetchToSaveExpenses(expense));
  }

  handleChangeExpense = ({ target: { name, value } }) => {
    this.setState(({ expense }) => ({
      expense: { ...expense, [name]: value },
      isDisabled: expense.value.length <= 1 && expense.description.length <= 1,
    }
    ));
  }

  render() {
    const { currenciesCode } = this.props;
    const { expense: { value, description }, isDisabled } = this.state;
    return (
      <S.Container name="expenseContainer">
        <S.Form name="expenseForm">
          <S.Label>
            Valor $?
            <S.Input
              value={ value }
              name="value"
              onChange={ this.handleChangeExpense }
              data-testid="value-input"
              type="number"
              placeholder="Valor total"
            />
          </S.Label>
          <S.Label>
            Despesa com:
            <S.TextArea
              value={ description }
              name="description"
              onChange={ this.handleChangeExpense }
              data-testid="description-input"
            />
          </S.Label>
          <S.Label>
            Custo referência
            <S.Select
              name="tag"
              onChange={ this.handleChangeExpense }
              data-testid="tag-input"
            >
              <option value="Alimentação">Selecionar</option>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </S.Select>
          </S.Label>
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
          <S.Label>
            Pago com:
            <S.Select
              name="method"
              onChange={ this.handleChangeExpense }
              data-testid="method-input"
            >
              <option value="Alimentação">Selecionar</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </S.Select>
          </S.Label>
          <S.Button
            disabled={ isDisabled }
            onClick={ this.handleClickToSaveExpense }
            type="submit"

          >
            Adicionar despesa

          </S.Button>
        </S.Form>
      </S.Container>
    );
  }
}

FormExpense.propTypes = {
  currenciesCode: arrayOf(string),
  dispatch: func,
}.isRequired;

const mapStateToProps = (state) => ({
  currenciesCode: state.wallet.currencies,
});

export default connect(mapStateToProps)(FormExpense);
