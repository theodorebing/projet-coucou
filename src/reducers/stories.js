import {
  SET_STORIES,
  FETCH_STORIES,
  OPEN_STORY_DETAILS,
} from 'src/actions/stories';

const initialState = {
  list: [],
  activeStoryDetails: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_STORIES:
      return {
        ...state,
        list: action.stories,
      };
    case FETCH_STORIES:
      return {
        ...state,
      };
    case OPEN_STORY_DETAILS:
      return {
        ...state,
        activeStoryDetails: !state.activeStoryDetails,
      };
    default:
      return state;
  }
};

export default reducer;
