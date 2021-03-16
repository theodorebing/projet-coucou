import {
  SEND_CODE_VALUE,
  SEND_FAMILY_NAME_VALUE,
  setFamilyIdOk,
} from 'src/actions/family';
import axios from 'src/api';

export default (store) => (next) => (action) => {
  const familyCode = store.getState().family.code;
  const familyNameCreated = store.getState().family.designation;
  switch (action.type) {
    case SEND_CODE_VALUE:
      axios.post('api/v1/account/join', {
        code: familyCode,
      })
        .then((result) => {
          store.dispatch(setFamilyIdOk(result.data.familyId));
        });
      return next(action);
    case SEND_FAMILY_NAME_VALUE:
      axios.post('api/v1/account', {
        designation: familyNameCreated,
      })
        .then(() => {
          axios.get('api/v1/account').then((result) => {
            store.dispatch(setFamilyIdOk(result.data.familyId));
          });
        });
      return next(action);
    default:
      return next(action);
  }
};
