import {
  SEND_FIELD_VALUE,
  CHECK_CONNECTION,
  LOGOUT,
  setIsLogged,
  logout,
} from 'src/actions/auth';
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
      axios.get('api/v1/welcome')
        .then((result) => {
          store.dispatch(setIsLogged(result.data.logged));
        });

      return next(action);

      // case LOGOUT:
      //   axios.get('api/v1/logout')
      //     .then((result) => {
      //       store.dispatch(logout(result.data.logged));
      //     });

      //   return next(action);

    default:
      return next(action);
  }
};
