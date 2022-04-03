// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SAVE_CURRENCY, SAVE_EXPENSE, DELET_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currenciesInfo: [],
  currencies: [],
  expenses: [],
  expensesToShow: [],
  totalR$: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_CURRENCY: {
    const keys = Object.keys(action.payload);
    return {
      ...state,
      currenciesInfo: action.payload,
      currencies: keys,
    };
  }

  case SAVE_EXPENSE: {
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload, id: state.expenses.length }],
    };
  }

  case DELET_EXPENSE: {
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.payload),
    };
  }
  default: return state;
  }
};

export default wallet;
