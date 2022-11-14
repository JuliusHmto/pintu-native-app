import { SAVE_ERROR, CLEAR_ERROR } from "../actionTypes/actionTypes";

export default errorReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_ERROR:
      return {
        payload: action.payload,
      };

    case CLEAR_ERROR:
      return {};

    default:
      return state;
  }
};
