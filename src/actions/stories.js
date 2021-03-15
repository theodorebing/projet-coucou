export const FETCH_STORIES = 'FETCH_STORIES';

export const fetchStories = () => ({
  type: FETCH_STORIES,
});

export const FETCH_STORY_DETAILS = 'FETCH_STORY_DETAILS';

export const fetchStoryDetails = (id) => ({
  type: FETCH_STORY_DETAILS,
  id,
});

export const SET_STORIES = 'SET_STORIES';

export const setStories = (stories) => ({
  type: SET_STORIES,
  stories,
});

export const SET_STORY = 'SET_STORY';

export const setStory = (story) => ({
  type: SET_STORY,
  story,
});

export const OPEN_STORY_DETAILS = 'OPEN_STORY_DETAILS';

export const openStoryDetails = (activeStoryDetails, id) => ({
  type: OPEN_STORY_DETAILS,
  activeStoryDetails,
  id,
});

export const OPEN_ADD_STORY_FORM = 'OPEN_ADD_STORY_FORM';

export const openAddStoryForm = () => ({
  type: OPEN_ADD_STORY_FORM,
});

export const ADD_STORY = 'ADD_STORY';

export const addStory = () => ({
  type: ADD_STORY,
});

export const DELETE_STORY = 'DELETE_STORY';

export const deleteStory = (deleteStoryBool) => ({
  type: DELETE_STORY,
  deleteStoryBool,
});
