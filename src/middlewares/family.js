import {
  SEND_CODE_VALUE,
  SEND_FAMILY_NAME_VALUE,
  setFamilyIdOk,
} from 'src/actions/family';
import axios from 'src/api';
import baseurl from './baseurl';

export default (store) => (next) => (action) => {
  const familyCode = store.getState().family.code;
  const familyNameCreated = store.getState().family.designation;
  switch (action.type) {
    case SEND_CODE_VALUE:
      axios.post(`${baseurl}account/join`, {
        code: familyCode,
      })
        .then((result) => {
          store.dispatch(setFamilyIdOk(result.data.familyId));
        });
      return next(action);
    case SEND_FAMILY_NAME_VALUE:
      axios.post(`${baseurl}account`, {
        designation: familyNameCreated,
      })
        .then(() => {
          axios.get(`${baseurl}account`).then((result) => {
            store.dispatch(setFamilyIdOk(result.data.familyId));
          });
        });
      return next(action);
    default:
      return next(action);
  }
};
