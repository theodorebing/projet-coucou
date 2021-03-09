import {
  SET_FIELD_VALUE,
  SET_ISLOGGED,
  LOGOUT,
  CHECK_CONNECTION,
} from 'src/actions/auth';

const initialState = {
  email: '',
  password: '',
  isLogged: false,
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
  }
};
