import { SEARCHACTIVE, SEARCHVALUE } from "./actionType";
const InitSearchState = {
  active: false, //搜索框激活状态
  value: "", //输入值
};

const reducer = (state = InitSearchState, action) => {
  switch (action.type) {
    case SEARCHACTIVE:
      return { ...state, active: action.payload.active };
    case SEARCHVALUE:
      return { ...state, value: action.payload.value };
    default:
      return state;
  }
};
export default reducer;
