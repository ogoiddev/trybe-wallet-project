// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SAVE_CURRENCY, SAVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalR$: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_CURRENCY: {
    const keys = Object.keys(action.payload);
    return {
      ...state,
      currenciesInfo: keys.map((code) => code !== 'USDT' && action.payload[code])
        .filter((each) => each),
      currencies: keys.filter((code) => code !== 'USDT'),
    };
  }

  case SAVE_EXPENSE: {
    const stateWithId = state.expenses.map((expense, i) => ({ ...expense, id: i }));
    const arrayToSet = [...stateWithId, { ...action.payload, id: stateWithId.length }];

    return {
      ...state,
      expenses: arrayToSet,
      totalR$: arrayToSet.reduce((acc, { value, currency, exchangeRates }) => (acc + value
        * exchangeRates[currency].ask), 0)
      || '',
    };
  }
  default: return state;
  }
};

export default wallet;
