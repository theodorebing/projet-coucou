import {
  SET_STORIES,
  SET_STORY,
  FETCH_STORIES,
  FETCH_STORY_DETAILS,
  OPEN_STORY_DETAILS,
  OPEN_ADD_STORY_FORM,
  DELETE_STORY,
} from 'src/actions/stories';
import { SET_FIELD_VALUE } from 'src/actions/auth';

const initialState = {
  list: [],
  story: [
    {
      id: null,
      title: '',
      text: '',
      location: '',
      startingDate: '',
      endingDate: '',
      createdAt: '',
    },
  ],
  activeStoryDetails: false,
  activeAddStoryForm: false,
  id: null,
  deleteStoryBool: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_STORIES:
      return {
        ...state,
        list: action.stories,
      };
    case SET_STORY:
      return {
        ...state,
        story: action.story,
        // [
        //   {
        //     id: action.story.id,
        //     title: action.story.title,
        //     text: action.story.text,
        //     location: action.story.location,
        //     startingDate: action.story.starting_date,
        //     endingDate: action.story.ending_date,
        //     createdAt: action.story.created_at,
        //   },
        // ],
      };
    case FETCH_STORIES:
      return {
        ...state,
      };
    case FETCH_STORY_DETAILS:
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
    case DELETE_STORY:
      return {
        ...state,
        deleteStoryBool: !state.deleteStoryBool,
      };
    default:
      return state;
  }
};

export default reducer;
