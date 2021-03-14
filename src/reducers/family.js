import { SAVE_FAMILIES } from 'src/actions/family';

export const initialState = [];

const family = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_FAMILIES:
      return [...action.families];

    default:
      return state;
  }
};

export default family;