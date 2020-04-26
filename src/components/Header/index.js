import React,{useState,useEffect} from "react";
import { useRouteMatch,useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { get } from "lodash";
import CustomIcon from "@/components/CustomIcon";
import SearchInput from "@/components/SearchInput";
import { setSearchActive, setSearchValue } from "@/store/modules/search/action";
import {DEFAULT_PLACEHOLDER} from "@/utils/tools"
import "./index.scss";
export default () => {
  const searchRouteMatch = useRouteMatch("/search");
  const homeRouteMatch = useRouteMatch("/");
  const isSearchView = get(searchRouteMatch, "isExact");
  const isHomeView = get(homeRouteMatch, "isExact");
  const active = useSelector((state) => state.search.active);
  const value = useSelector((state) => state.search.value);
  const [placeholder,setPlaceholder] = useState(DEFAULT_PLACEHOLDER)
  const dispatch = useDispatch();
  const history = useHistory()
  useEffect(() => {
    
  }, []);
  const focusHandle = () => {
    if (active === false) {
      dispatch(setSearchActive(true));
    }
    if(isSearchView){
      history.push('/')
    }
  };
  const chaneHandle =(value) => {
    dispatch(setSearchValue(value));
  };
  const cancelHandle = () =>{
    history.goBack()
    dispatch(setSearchValue(''));
    dispatch(setSearchActive(false));
  }
  const submitHandle =()=>{

  }
  return (
    <div className="Header">
      {isHomeView && <CustomIcon type="maikefeng" />}
      <SearchInput
        placeholder={placeholder}
        value={value}
        className={active ? "" : "center"}
        searchFocus={focusHandle}
        searchChange={chaneHandle}
        searchSubmit = {submitHandle}
      />
      {isHomeView && active && <span onClick={cancelHandle}>取消</span>}
    </div>
  );
};
