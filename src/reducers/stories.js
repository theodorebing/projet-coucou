import {
  SET_STORIES,
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
    default:
      return state;
  }
};

export default reducer;
