import { combineReducers } from 'redux';
import auth from './auth';
import joinFamily from './joinFamily';

export default combineReducers({
  auth,
  joinFamily,
});
