import {
  SEND_FIELD_VALUE,
  setIsLogged,
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
          store.dispatch(setIsLogged(result.data.logged, result.data.pseudo));
        });

      return next(action);
    default:
      return next(action);
  }
};
