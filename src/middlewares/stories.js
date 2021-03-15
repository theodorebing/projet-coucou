import {
  FETCH_STORIES,
  FETCH_STORY_DETAILS,
  fetchStories,
  setStories,
  setStory,
  ADD_STORY,
  openAddStoryForm,
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
    case FETCH_STORY_DETAILS:
      console.log('action', action);
      axios.get(`${baseurl}family/stories/${action.id}`)
        .then((result) => {
          store.dispatch(setStory(result.data,
            // result.data.id,
            // result.data.title,
            // result.data.text,
            // result.data.location,
            // result.data.starting_date,
            // result.data.ending_date,
            // result.data.created_at,
          ));
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
