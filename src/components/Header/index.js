import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { get, isEmpty, isEqual, includes } from "lodash";
import CustomIcon from "@/components/CustomIcon";
import SearchInput from "@/components/SearchInput";
import {
  setSearchActive,
  setSearchValue,
  setSearchHistory,
} from "@/store/modules/search/action";
import { DEFAULT_PLACEHOLDER } from "@/utils/tools";
import { searchDefault } from "@/constants/api";
import "./index.scss";
export default () => {
  const searchRouteMatch = useRouteMatch("/search");
  const homeRouteMatch = useRouteMatch("/");
  const isSearchView = get(searchRouteMatch, "isExact");
  const isHomeView = get(homeRouteMatch, "isExact");
  const active = useSelector((state) => state.search.active);
  const value = useSelector((state) => state.search.value);
  const historys = useSelector((state) => state.search.historys);
  const [placeholder, setPlaceholder] = useState(DEFAULT_PLACEHOLDER);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    searchDefault().then(
      (res) => {
        let { code, data } = res.data;
        if (code === 200 && !isEmpty(data)) {
          setPlaceholder(data.realkeyword);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
  const focusHandle = () => {
    if (active === false) {
      dispatch(setSearchActive(true));
    }
    if (isSearchView) {
      history.push("/");
    }
  };
  const chaneHandle = (value) => {
    dispatch(setSearchValue(value));
  };
  const cancelHandle = () => {
    dispatch(setSearchValue(""));
    dispatch(setSearchActive(false));
  };
  const submitHandle = () => {
    if (!isEmpty(value)) {
      history.push(`/search?query=${value}`);
    } else if (!isEqual(placeholder, DEFAULT_PLACEHOLDER)) {
      dispatch(setSearchValue(placeholder));
      history.push(`/search?query=${placeholder}`);
    }
    const historyValue = value || placeholder;
    if (!includes(historyValue)) {
      historys.push(historyValue);
      setSearchHistory(historys);
    }
  };
  return (
    <div className="Header">
      {isHomeView && <CustomIcon type="maikefeng" />}
      {isSearchView && <CustomIcon type="back" />}

      <SearchInput
        placeholder={placeholder}
        value={value}
        className={active ? "" : "center"}
        searchFocus={focusHandle}
        searchChange={chaneHandle}
        searchSubmit={submitHandle}
      />
      {isHomeView && active && <span onClick={cancelHandle}>取消</span>}
    </div>
  );
};
