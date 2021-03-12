import { combineReducers } from 'redux';
import auth from './auth';
import family from './family';

export default combineReducers({
  auth,
  family,
});
