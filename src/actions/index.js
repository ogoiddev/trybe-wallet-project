// Coloque aqui suas actions
import fetchCurrencies from '../services/currencies_API';

export const SAVE_LOGIN = 'SAVE_LOGIN';
export const SAVE_CURRENCY = 'SAVE_CURRENCY';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const actionSaveLogin = (payload) => ({
  type: SAVE_LOGIN,
  payload,
});

export const actionSaveCurrency = (payload) => ({
  type: SAVE_CURRENCY,
  payload,
});

export const actionSaveExpense = (payload) => ({
  type: SAVE_EXPENSE,
  payload,
});

export const actionFetchToSaveCurrencys = () => async (dispatch) => {
  const currencys = await fetchCurrencies();
  dispatch(actionSaveCurrency(currencys));
};
