import { SAVE_RECIPES } from 'src/actions/recipes';

export const initialState = [];

const family = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return [...action.recipes];
    default:
      return state;
  }
};

export default family;