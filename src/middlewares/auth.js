import {
  SEND_FIELD_VALUE,
  SEND_FIELD_VALUE_SIGNUP,
  CHECK_CONNECTION,
  SEND_LOGOUT,
  checkConnection,
  setIsLogged,
  logout,
} from 'src/actions/auth';
import { setFamilyIdOk } from 'src/actions/family';
import axios from 'src/api';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_FIELD_VALUE:
      axios.post('api/v1/connexion', {
        email: store.getState().auth.email,
        password: store.getState().auth.password,
      })
        .then((result) => {
          store.dispatch(setIsLogged(result.data.logged));
        });
      return next(action);

    case CHECK_CONNECTION:
      axios.get('api/v1/account')
        .then((result) => {
          store.dispatch(setIsLogged(result.data.logged, result.data.email));
          store.dispatch(setFamilyIdOk(result.data.familyId));
        });
      return next(action);

    case SEND_LOGOUT:
      axios.get('api/v1/logout')
        .then((result) => {
          store.dispatch(logout(result.data.logged));
        });
      return next(action);

    case SEND_FIELD_VALUE_SIGNUP:
      axios.post('api/v1/subscription', {
        email: store.getState().auth.email,
        password: store.getState().auth.password,
      });
      return next(action);
    default:
      return next(action);
  }
};
