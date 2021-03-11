import { SET_FIELD_VALUE } from 'src/actions/auth';

const initialState = {
  code: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
