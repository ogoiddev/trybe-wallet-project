// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_LOGIN } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

export default userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_LOGIN:
    return { ...state, user: { email: action.payload.email } };
  default: return state;
  }
};
