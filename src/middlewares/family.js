import {
  SEND_CODE_VALUE,
  setFamilyIdOk,
} from 'src/actions/family';
import axios from 'src/api';

export default (store) => (next) => (action) => {
  const familyCode = store.getState().family.code;
  switch (action.type) {
    case SEND_CODE_VALUE:
      axios.post('api/v1/account/join', {
        code: familyCode,
      })
        .then((result) => {
          console.log(result.data.familyId);
          store.dispatch(setFamilyIdOk(result.data.familyId));
        });
      return next(action);
    default:
      return next(action);
  }
};
