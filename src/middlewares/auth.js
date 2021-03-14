import {
  SEND_FIELD_VALUE,
  setIsLogged,
} from 'src/actions/auth';
import axios from 'src/api';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_FIELD_VALUE:
      try {
        // axios.post('api/v1/connexion', {
        //   email: store.getState().auth.email,
        //   password: store.getState().auth.password,
        // })
        //   .then((result) => {
        //     store.dispatch(setIsLogged(result.data.logged));
        //   });
        const data = {
          email: 'toto@toto',
          password: 'toto',
          isLogged: true,
          pseudo: "toto",
          favorites: "toto",
          familyName: "toto",
          firstName: "toto",
          familyId: 1234
        }

        store.dispatch(setIsLogged(data))

      } catch (error) {
        console.log(error);
      }


      return next(action);
    default:
      return next(action);
  }
};
