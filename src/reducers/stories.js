import {
  SET_STORIES,
  FETCH_STORIES,
  OPEN_STORY_DETAILS,
  OPEN_ADD_STORY_FORM,
  EMPTY_STORIES,
} from 'src/actions/stories';
import { SET_FIELD_VALUE } from 'src/actions/auth';

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
    case SET_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case EMPTY_STORIES:
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default reducer;
