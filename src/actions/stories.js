export const FETCH_STORIES = 'FETCH_STORIES';

export const fetchStories = () => ({
  type: FETCH_STORIES,
});

export const SET_STORIES = 'SET_STORIES';

export const setStories = (stories) => ({
  type: SET_STORIES,
  stories,
});

export const OPEN_STORY_DETAILS = 'OPEN_STORY_DETAILS';

export const openStoryDetails = (activeStoryDetails) => ({
  type: OPEN_STORY_DETAILS,
  activeStoryDetails,
});
