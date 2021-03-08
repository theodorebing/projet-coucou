import {
  SET_FIELD_VALUE,
  SET_ISLOGGED,
  LOGOUT,
  CHECK_CONNECTION,
  OPEN_SIGNUP_FORM,
} from 'src/actions/auth';

const initialState = {
  email: '',
  password: '',
<<<<<<< HEAD
  isLogged: false,
  activeSignUpForm: false,
=======
  isLogged: true,
>>>>>>> tree preparation
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
    default:
      return state;
    case OPEN_SIGNUP_FORM:
      return {
        ...state,
        activeSignUpForm: !state.activeSignUpForm,
      };
  }
};
