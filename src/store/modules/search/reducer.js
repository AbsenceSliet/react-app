import {
  SEARCHACTIVE,
  SEARCHVALUE,
  SEARCHOT,
  SEARCHISTORY,
} from "./actionType";
import {remove,isEqual} from "lodash"

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
      let value =  action.payload.historys
      let len = state.historys.length
      remove(state.historys,history=>isEqual(history,value))
      if(value){
        state.historys.unshift(value)
      }else{
        state.historys.splice(0,len)
      }
      return {...state,historys:state.historys};
    default:
      return state;
  }
};
export default reducer;
