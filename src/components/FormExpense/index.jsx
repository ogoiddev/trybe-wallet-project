import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, string, func } from 'prop-types';
import * as S from '../../components_Styled/FormElements';
import {
  actionFetchToSaveExpenses, actionTo, SAVE_EXPENSE, EDIT_EXPENSE,
} from '../../actions';

const INITIAL_STATE = {
  value: '',
  description: '',
  tag: 'Selecione',
  currency: '$$',
  method: '',
};

const TAG_LIST = ['Selecione', 'Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const METHOD_LIST = ['Selecione', 'Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

class FormExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: { ...INITIAL_STATE },
      isDisabled: true,
      action: { action: SAVE_EXPENSE, func: actionFetchToSaveExpenses },
    };
  }

  componentDidMount() {
    this.setState(({ expense }) => ({
      isDisabled: expense.value.length <= 1,
    }));
  }

  componentDidUpdate(prevProps) {
    const { isEdit } = this.props;
    if (isEdit && !prevProps.isEdit) {
      this.handleEditToSave();
    }
  }

  handleClickToSaveExpense = async (e) => {
    e.preventDefault();
    this.setState({
      expense: { ...INITIAL_STATE },
      action: { action: SAVE_EXPENSE, func: actionFetchToSaveExpenses },
      isDisabled: true,
    });
    const { dispatch } = this.props;
    const { expense, action } = this.state;
    dispatch(action.func(action.action, expense));
  }

  handleEditToSave = () => {
    const { expenseToEdit } = this.props;
    this.setState({ expense: { ...expenseToEdit },
      action: { action: EDIT_EXPENSE, func: actionTo,
      } });
  }

  handleChangeExpense = ({ target: { name, value } }) => {
    this.setState(({ expense }) => ({
      expense: { ...expense, [name]: value },
      isDisabled: !(expense.value.length >= 1
        && expense.description.length >= 1
        && expense.currency.length >= 1
      ),
    }
    ));
  }

  render() {
    const { currenciesCode, isEdit } = this.props;
    const { expense: { value, description, tag, currency, method },
      isDisabled } = this.state;

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
              value={ tag }
              name="tag"
              onChange={ this.handleChangeExpense }
              data-testid="tag-input"
            >
              {TAG_LIST
                .map((each) => <option key={ each } value={ each }>{each}</option>)}
            </S.Select>
          </S.Label>
          <S.Label>
            Moeda
            <S.Select
              value={ currency }
              required
              name="currency"
              onChange={ this.handleChangeExpense }
              data-testid="currency-input"
            >
              {/* <option value="$$">$$</option> */}
              {currenciesCode.map((each) => (
                <option key={ each }>{each}</option>
              ))}
            </S.Select>
          </S.Label>
          <S.Label>
            Pago com:
            <S.Select
              value={ method }
              name="method"
              onChange={ this.handleChangeExpense }
              data-testid="method-input"
            >
              {METHOD_LIST
                .map((each) => <option key={ each } value={ each }>{each}</option>)}
            </S.Select>
          </S.Label>
          <S.Button
            name={ isEdit === true ? 'Editar despesa' : 'Adicionar despesa' }
            disabled={ isDisabled }
            onClick={ this.handleClickToSaveExpense }
            type="submit"
            isEdit={ isEdit }
          >
            {isEdit ? 'Editar despesa' : 'Adicionar despesa'}

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
  isEdit: state.wallet.isEditStatus,
  expenseToEdit: state.wallet.expenseToEdit,
});

export default connect(mapStateToProps)(FormExpense);
