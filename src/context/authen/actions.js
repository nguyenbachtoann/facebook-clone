import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILED } from "./actionTypes";

export const loginLoading = () => ({ type: LOGIN_LOADING });
export const loginSuccess = (response) => ({ type: LOGIN_SUCCESS, response });
export const loginFailed = (response) => ({ type: LOGIN_FAILED, response });
