import { SEARCHACTIVE, SEARCHVALUE } from "./actionType";

export const setSearchActive = (active) => ({
  type: SEARCHACTIVE,
  payload: {
    active,
  },
});
export const setSearchValue = (value) => ({
  type: SEARCHVALUE,
  payload: {
    value,
  },
});
