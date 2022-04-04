import {
  SAVE_CURRENCY, SAVE_EXPENSE,
  DELET_EXPENSE, EDIT_EXPENSE, EDIT_STATUS,
} from '../actions';

const INITIAL_STATE = {
  currenciesInfo: [],
  currencies: [],
  expenses: [],
  expenseToEdit: {},
  totalR$: 0,
  isEditStatus: false,
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

  case EDIT_EXPENSE: {
    return {
      ...state,
      expenses: state.expenses
        .map((each) => (action.payload.id === each.id ? action.payload : each)),
      isEditStatus: false,
    };
  }

  case EDIT_STATUS: {
    return {
      ...state,
      isEditStatus: true,
      expenseToEdit: { ...state.expenses.find(({ id }) => id === action.payload) },
    };
  }

  default: return state;
  }
};

export default wallet;
