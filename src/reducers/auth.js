import {
  SET_FIELD_VALUE,
  SET_ISLOGGED,
  LOGOUT,
  CHECK_CONNECTION,
  OPEN_SIGNUP_FORM,
  GET_SIGNUP_OK,
  GET_SIGNUP_WRONG,
} from 'src/actions/auth';

const initialState = {
  email: '',
  password: '',
  name: '',
  isLogged: false,
  activeSignUpForm: false,
  signUpIsOk: false,
  signUpIsWrong: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_ISLOGGED:
      return {
        ...state,
        isLogged: !action.isLogged,
        email: action.email,
        password: '',
        name: action.name,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: !state.isLogged,
        email: '',
        password: '',
      };
    case CHECK_CONNECTION:
      return {
        ...state,
      };
    case OPEN_SIGNUP_FORM:
      return {
        ...state,
        activeSignUpForm: !state.activeSignUpForm,
        signUpIsOk: !state.signupIsOk,
      };
    case GET_SIGNUP_OK:
      return {
        ...state,
        signUpIsOk: true,
        email: '',
        password: '',
      };
    case GET_SIGNUP_WRONG:
      return {
        ...state,
        signUpIsWrong: true,
      };
    default:
      return state;
  }
};
