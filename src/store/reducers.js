import { combineReducers } from "redux";
import { clearState } from "@/store";
import { ADDBASEINFO, RESETINFO } from "@/store/actiontype";
import searchReducer from "./modules/search/reducer";
const initState = {};
const baseInfo = (state = initState, action = {}) => {
  switch (action.type) {
    case ADDBASEINFO:
      return { ...state, ...action.data };
    default:
      return state;
  }
};
const appReducer = combineReducers({
  baseInfo,
  search: searchReducer,
});
const rootReducer = (state, action) => {
  if (action.type === RESETINFO) {
    state = Object.assign({}, initState);
    clearState();
  }

  return appReducer(state, action);
};
export default rootReducer;
