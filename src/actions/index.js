// Coloque aqui suas actions
import fetchCurrencies from '../services/currencies_API';

export const SAVE_LOGIN = 'SAVE_LOGIN';
export const SAVE_CURRENCY = 'SAVE_CURRENCY';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const DELET_EXPENSE = 'DELET_EXPENSE';

export const actionTo = (type, payload) => ({
  type,
  payload,
});

export const actionFetchToSaveCurrencies = () => async (dispatch) => {
  const currencys = await fetchCurrencies();
  delete currencys.USDT;
  dispatch(actionTo(SAVE_CURRENCY, currencys));
};

export const actionFetchToSaveExpenses = (payload) => async (dispatch) => {
  const currencys = await fetchCurrencies();
  delete currencys.USDT;
  dispatch(actionTo(SAVE_EXPENSE, { ...payload, exchangeRates: currencys }));
};
