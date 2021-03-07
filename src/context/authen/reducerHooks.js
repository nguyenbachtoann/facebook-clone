import { useReducer } from "react";
import reducer, { initialState } from "./reducer";

import { firebaseAuth, facebookProvider } from "../../configs";
import { loginLoading, loginSuccess, loginFailed } from "./actions";
export const useLogin = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const makeRequest = async () => {
    dispatch(loginLoading);
    firebaseAuth
      .signInWithPopup(facebookProvider)
      .then((r) => {
        dispatch(loginSuccess(r));
        localStorage.setItem("user", JSON.stringify(r));
      })
      .catch((e) => dispatch(loginFailed(e)));
  };
  return [state, makeRequest];
};
