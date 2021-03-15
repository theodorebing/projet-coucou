import { FETCH_STORIES, setStories, ADD_STORY } from 'src/actions/stories';
import axios from 'src/api';
import baseurl from './baseurl';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_STORIES:
      axios.get(`${baseurl}family/stories`)
        .then((result) => {
          store.dispatch(setStories(result.data));
        });
      return next(action);
    case ADD_STORY:
      axios.post(`${baseurl}family/stories`)
        .then((result) => {
          setStories(result.data);
        });
      return next(action);
    default:
      return next(action);
  }
};
