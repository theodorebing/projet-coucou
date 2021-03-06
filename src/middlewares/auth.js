import {
  SEND_FIELD_VALUE,
  SEND_FIELD_VALUE_SIGNUP,
  CHECK_CONNECTION,
  SEND_LOGOUT,
  openSignUpForm,
  getSignupOk,
  getSignupWrong,
  setIsLogged,
  logout,
} from 'src/actions/auth';
import { setFamilyIdOk } from 'src/actions/family';
import { emptyStories, closeAddStoryForm } from 'src/actions/stories';
import axios from 'src/api';
import baseurl from './baseurl';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_FIELD_VALUE:
      axios.post(`${baseurl}connexion`, {
        email: store.getState().auth.email,
        password: store.getState().auth.password,
      })
        .then((result) => {
          store.dispatch(setIsLogged(result.data.logged));
        });
      return next(action);

    case CHECK_CONNECTION:
      axios.get(`${baseurl}account`)
        .then((result) => {
          store.dispatch(setIsLogged(result.data.logged, result.data.email, result.data.name));
          store.dispatch(setFamilyIdOk(result.data.familyId));
          store.dispatch(closeAddStoryForm());
        }).catch((error) => {
          console.log('error', error);
          store.dispatch(logout());
          store.dispatch(emptyStories());
          store.dispatch(closeAddStoryForm());
        });
      return next(action);

    case SEND_LOGOUT:
      axios.get(`${baseurl}logout`)
        .then((result) => {
          store.dispatch(logout(result.data.logged));
        });
      return next(action);

    case SEND_FIELD_VALUE_SIGNUP:
      axios.post(`${baseurl}subscription`, {
        email: store.getState().auth.email,
        password: store.getState().auth.password,
      })
        .then(() => {
          store.dispatch(getSignupOk());
        })
        .catch((error) => {
          console.log('error', error);
          store.dispatch(getSignupWrong());
        });
      return next(action);
    default:
      return next(action);
  }
};
