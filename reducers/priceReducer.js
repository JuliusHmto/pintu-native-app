import { SAVE_CRYPTO_PRICE, CLEAR_CRYPTO_PRICE } from "../actionTypes/actionTypes";


export default priceReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_CRYPTO_PRICE:
      return {
        payload: action.payload,
      };

    case CLEAR_CRYPTO_PRICE:
      return {};

    default:
      return state;
  }
};
