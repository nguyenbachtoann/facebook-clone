import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILED } from "./actionTypes";

export const initialState = {
  status: null,
  response: null,
};

const reducer = (state = initialState, { type, response } = {}) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...initialState, status: LOGIN_LOADING };
    case LOGIN_SUCCESS:
      return { ...state, status: LOGIN_SUCCESS, response };
    case LOGIN_FAILED:
      return { ...state, status: LOGIN_FAILED, response };
    default:
      return state;
  }
};

export default reducer;
