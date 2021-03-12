export const FETCH_STORIES = 'FETCH_STORIES';

export const fetchStories = () => ({
  type: FETCH_STORIES,
});

export const SET_STORIES = 'SET_STORIES';

export const setStories = (stories) => ({
  type: SET_STORIES,
  stories,
});
