export const SEND_CODE_VALUE = 'SEND_CODE_VALUE';

export const sendCodeValue = () => ({
  type: SEND_CODE_VALUE,
});

export const SET_FAMILY_ID_OK = 'SET_FAMILY_ID_OK';

export const setFamilyIdOk = (familyId) => ({
  type: SET_FAMILY_ID_OK,
  familyId,
});

export const SEND_FAMILY_NAME_VALUE = 'SEND_FAMILY_NAME_VALUE';

export const sendFamilyNameValue = () => ({
  type: SEND_FAMILY_NAME_VALUE,
});
