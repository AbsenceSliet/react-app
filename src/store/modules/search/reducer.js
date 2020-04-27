import {
  SEARCHACTIVE,
  SEARCHVALUE,
  SEARCHOT,
  SEARCHISTORY,
} from "./actionType";
const InitSearchState = {
  active: false, //搜索框激活状态
  value: "", //输入值
  hot: [],
  historys: [],
};

const reducer = (state = InitSearchState, action) => {
  switch (action.type) {
    case SEARCHACTIVE:
      return { ...state, active: action.payload.active };
    case SEARCHVALUE:
      return { ...state, value: action.payload.value };
    case SEARCHOT:
      return { ...state, hot: action.payload.hot };
    case SEARCHISTORY:
      return {
        ...state,
        historys: action.payload.historys,
      };
    default:
      return state;
  }
};
export default reducer;
