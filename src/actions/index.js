// Coloque aqui suas actions
export const SAVE_LOGIN = 'SAVE_LOGIN';
export const SAVE_WALLET = 'SAVE_WALLET';

export const actionSaveLogin = (payload) => ({
  type: SAVE_LOGIN,
  payload,
});

export const actionSaveWallet = (payload) => ({
  type: SAVE_WALLET,
  payload,
});
