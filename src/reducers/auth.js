import {
  SET_FIELD_VALUE,
  SET_ISLOGGED,
  LOGOUT,
  CHECK_CONNECTION,
  OPEN_SIGNUP_FORM,
  GET_SIGNUP_OK,
} from 'src/actions/auth';

const initialState = {
  email: '',
  password: '',
  name: '',
  isLogged: false,
  activeSignUpForm: false,
  signUpIsOk: false,
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
      };
    case GET_SIGNUP_OK:
      return {
        ...state,
        signUpIsOk: !state.signupIsOk,
        email: '',
        password: '',
      };
    default:
      return state;
  }
};
