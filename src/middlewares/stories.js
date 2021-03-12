import { FETCH_STORIES, setStories } from 'src/actions/stories';
import axios from 'src/api';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_STORIES:
      axios.get('/stories')
        .then((result) => {
          store.dispatch(setStories(result.data));
        });
      return next(action);
    default:
      return next(action);
  }
};
