import { FETCH_STORIES, setStories } from 'src/actions/stories';
import axios from 'src/api';
import baseurl from './baseurl';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_STORIES:
      axios.get(`${baseurl}family/stories`)
        .then((result) => {
          console.log(result.data);
          store.dispatch(setStories(result.data));
        });
      return next(action);
    default:
      return next(action);
  }
};
