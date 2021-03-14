export const FETCH_FAMILIES = 'FETCH_FAMILIES';
export const SAVE_FAMILIES = 'SAVE_FAMILIES';


export const fetchFamilies = () => ({
  type: FETCH_FAMILIES,
});

export const saveFamilies = (families) => ({
  type: SAVE_FAMILIES,
  families,
});
