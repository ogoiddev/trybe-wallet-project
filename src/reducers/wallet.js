// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SAVE_CURRENCY, SAVE_EXPENSE } from '../actions';

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
    const statePrevWithId = state.expenses.map((expense, i) => ({ ...expense, id: i }));
    const newArrayToSet = [...statePrevWithId,
      { ...action.payload, id: statePrevWithId.length }];

    return {
      ...state,
      expenses: newArrayToSet,
      totalR$: newArrayToSet.reduce((acc, { value, currency, exchangeRates }) => (
        acc + value * exchangeRates[currency].ask), 0)
        || '',
    };
  }

  default: return state;
  }
};

export default wallet;
