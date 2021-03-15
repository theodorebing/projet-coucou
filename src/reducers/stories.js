import {
  SET_STORIES,
  FETCH_STORIES,
  OPEN_STORY_DETAILS,
  OPEN_ADD_STORY_FORM,
} from 'src/actions/stories';

const initialState = {
  list: [],
  activeStoryDetails: false,
  activeAddStoryForm: false,
  id: null,
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
        id: action.id,
      };
    case OPEN_ADD_STORY_FORM:
      return {
        ...state,
        activeAddStoryForm: !state.activeAddStoryForm,
      };
    default:
      return state;
  }
};

export default reducer;
