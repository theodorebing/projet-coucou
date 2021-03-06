export const SET_FIELD_VALUE = 'SET_FIELD_VALUE';

export const setFieldValue = (value, name) => ({
  type: SET_FIELD_VALUE,
  value,
  name,
});

export const SEND_FIELD_VALUE = 'SEND_FIELD_VALUE';

export const sendFieldValue = () => ({
  type: SEND_FIELD_VALUE,
});

export const SET_ISLOGGED = 'SET_ISLOGGED';

export const setIsLogged = (isLogged, email, name) => ({
  type: SET_ISLOGGED,
  isLogged,
  email,
  name,
});

export const LOGOUT = 'LOGOUT';

export const logout = (isLogged) => ({
  type: LOGOUT,
  isLogged,
});

export const SEND_LOGOUT = 'SEND_LOGOUT';

export const sendLogout = () => ({
  type: SEND_LOGOUT,
});

export const CHECK_CONNECTION = 'CHECK_CONNECTION';

export const checkConnection = (email) => ({
  type: CHECK_CONNECTION,
  email,
});

export const OPEN_SIGNUP_FORM = 'OPEN_SIGNUP_FORM';

export const openSignUpForm = (activeSignUpForm) => ({
  type: OPEN_SIGNUP_FORM,
  activeSignUpForm,
});

export const SEND_FIELD_VALUE_SIGNUP = 'SEND_FIELD_VALUE_SIGNUP';

export const sendFieldValueSignup = () => ({
  type: SEND_FIELD_VALUE_SIGNUP,
});

export const GET_SIGNUP_OK = 'GET_SIGNUP_OK';

export const getSignupOk = (signupIsOk) => ({
  type: GET_SIGNUP_OK,
  signupIsOk,
});

export const GET_SIGNUP_WRONG = 'GET_SIGNUP_WRONG';

export const getSignupWrong = (signupIsWrong) => ({
  type: GET_SIGNUP_WRONG,
  signupIsWrong,
});
