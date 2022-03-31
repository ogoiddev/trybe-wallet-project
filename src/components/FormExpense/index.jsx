import React, { Component } from 'react';
import * as S from '../globalStyled';

export default class FormExpense extends Component {
  render() {
    return (
      <S.FormExpense>
        <S.Input type="text" placeholder="R$" />
      </S.FormExpense>
    );
  }
}
