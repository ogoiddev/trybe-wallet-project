// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SAVE_CURRENCY, SAVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
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
  case SAVE_EXPENSE:
    return { ...state, expenses: [...action.payload] };
  default: return state;
  }
};

export default wallet;
