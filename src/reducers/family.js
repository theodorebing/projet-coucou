import { SET_FIELD_VALUE } from 'src/actions/auth';
import { SET_FAMILY_ID_OK } from 'src/actions/family';

const initialState = {
  code: '',
  familyId: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    case SET_FAMILY_ID_OK:
      return {
        ...state,
        familyId: action.familyId,
      };
    default:
      return state;
  }
};

export default reducer;
