import {
  SET_STORIES,
  FETCH_STORIES,
} from 'src/actions/stories';

const initialState = {
  list: [],
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
    default:
      return state;
  }
};

export default reducer;
