import {
  SEARCHACTIVE,
  SEARCHVALUE,
  SEARCHOT,
  SEARCHISTORY,
} from "./actionType";

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
/**
 * 热搜榜action
 */
export const setSearchHot = (hot) => ({
  type: SEARCHOT,
  payload: {
    hot,
  },
});
/**
 * 搜索历史
 */
export const setSearchHistory = (historys) => ({
  type: SEARCHISTORY,
  payload: {
    historys,
  },
});
