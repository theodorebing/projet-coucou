export const SEND_CODE_VALUE = 'SEND_CODE_VALUE';

export const sendCodeValue = () => ({
  type: SEND_CODE_VALUE,
});

export const SET_FAMILY_ID_OK = 'SET_FAMILY_ID_OK';

export const setFamilyIdOk = (familyIdOk) => ({
  type: SET_FAMILY_ID_OK,
  familyIdOk,
});
