import { combineReducers } from "redux";
import { clearState } from "@/store";
import { ADDBASEINFO, RESETINFO } from "@/store/actiontype";

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
});
const rootReducer = (state, action) => {
  if (action.type === RESETINFO) {
    state = Object.assign({}, initState);
    clearState();
  }

  return appReducer(state, action);
};
export default rootReducer;
