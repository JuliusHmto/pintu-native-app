import { SAVE_CRYPTO_DATA, CLEAR_CRYPTO_DATA } from "../actionTypes/actionTypes";

export default cryptoReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_CRYPTO_DATA:
      return {
        payload: action.payload,
      };

    case CLEAR_CRYPTO_DATA:
      return {};

    default:
      return state;
  }
};
