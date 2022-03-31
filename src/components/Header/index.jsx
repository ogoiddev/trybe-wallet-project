import React, { Component } from 'react';
import FormExpense from '../FormExpense';
import * as S from './style';

export default class Header extends Component {
  render() {
    return (
      <S.Header>

        <FormExpense />

      </S.Header>
    );
  }
}
