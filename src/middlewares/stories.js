import {
  FETCH_STORIES, fetchStories, setStories, ADD_STORY, openAddStoryForm,
} from 'src/actions/stories';
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
      axios.post(`${baseurl}family/stories`, {
        title: store.getState().stories.title,
        text: store.getState().stories.text,
        location: store.getState().stories.location,
        startingDate: store.getState().stories.startingDate,
        endingDate: store.getState().stories.endingDate,
      })
        .then(() => {
          store.dispatch(fetchStories());
          store.dispatch(openAddStoryForm());
        });
      return next(action);
    default:
      return next(action);
  }
};
