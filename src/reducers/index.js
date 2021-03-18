import { combineReducers } from 'redux';
import auth from './auth';
import family from './family';
import stories from './stories';
import general from './general';

export default combineReducers({
  auth,
  family,
  stories,
  general,
});
