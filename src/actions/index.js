// Coloque aqui suas actions
import fetchCurrencies from '../services/currencies_API';

export const SAVE_LOGIN = 'SAVE_LOGIN';
export const SAVE_CURRENCY = 'SAVE_CURRENCY';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const actionSaveLogin = (payload) => ({
  type: SAVE_LOGIN,
  payload,
});

const actionSaveCurrency = (payload) => ({
  type: SAVE_CURRENCY,
  payload,
});

const actionSaveExpense = (payload) => ({
  type: SAVE_EXPENSE,
  payload,
});

export const actionFetchToSaveCurrencies = () => async (dispatch) => {
  const currencys = await fetchCurrencies();
  delete currencys.USDT;
  dispatch(actionSaveCurrency(currencys));
};

export const actionFetchToSaveExpenses = (payload) => async (dispatch) => {
  const currencys = await fetchCurrencies();
  delete currencys.USDT;
  dispatch(actionSaveExpense({ ...payload, exchangeRates: currencys }));
};
