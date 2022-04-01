import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, string } from 'prop-types';
import * as S from '../../components_Styled/FormElements';

class FormExpense extends Component {
  render() {
    const { currenciesCode } = this.props;
    return (
      <S.Form>
        <S.Input
          data-testid="value-input"
          type="text"
          placeholder="R$"
        />
        <S.TextArea
          data-testid="description-input"
        />
        <S.Label>
          Moeda
          <S.Select>
            {currenciesCode.map((each) => (
              <option key={ each }>{each}</option>
            ))}
          </S.Select>
        </S.Label>
        <S.Select data-testid="method-input">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </S.Select>
        <S.Select data-testid="tag-input">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </S.Select>
      </S.Form>
    );
  }
}

FormExpense.propTypes = {
  currenciesCode: arrayOf(string).isRequired,
};

const mapStateToProps = (state) => ({
  currenciesCode: state.wallet.currencies,
});

export default connect(mapStateToProps)(FormExpense);
