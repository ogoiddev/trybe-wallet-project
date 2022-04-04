import React from 'react';
import { useDispatch } from 'react-redux';
import { number } from 'prop-types';
import * as S from '../../components_Styled/FormElements';
import { actionTo, DELET_EXPENSE, EDIT_STATUS } from '../../actions';

export default function Buttons({ id }) {
  const dispatch = useDispatch();

  return (
    <>
      <S.EditBtn
        onClick={ () => dispatch(actionTo(EDIT_STATUS, id)) }
        data-testid="edit-btn"
      />
      <S.DeletBtn
        onClick={ () => dispatch(actionTo(DELET_EXPENSE, id)) }
        data-testid="delete-btn"
        type="button"
      />
    </>
  );
}

Buttons.propTypes = {
  id: number.isRequired,
};
