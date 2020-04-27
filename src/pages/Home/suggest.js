import React, { useState, useEffect } from "react";
import CustomIcon from "@/components/CustomIcon";
import { useSelector, useDispatch } from "react-redux";
import { getSearchSuggest } from "@/constants/api";
import { useDebounce } from "@/utils/hooks";
import { isEmpty, map } from "lodash";
import { useHistory } from "react-router-dom";
import { setSearchValue,setSearchHistory } from "@/store/modules/search/action";

export default () => {
  const value = useSelector((state) => state.search.value);

  const debounceValue = useDebounce(value, 800);
  const [suggest, setSuggest] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    getSearchSuggest(debounceValue).then(
      (res) => {
        console.log(res);
        let { code, result } = res.data;
        if (code === 200 && !isEmpty(result)) {
          setSuggest(result.allMatch);
        }
      },
      (err) => {}
    );
  }, [debounceValue]);
  const keywordhandle = (keyword) => {
    dispatch(setSearchHistory(keyword))
    dispatch(setSearchValue(keyword));
    history.push(`/search?query=${keyword}`);
  };
  return (
    <div className="suggest">
      <div className="suggest_target">搜索“{value}”</div>
      <ul className="suggest_list">
        {map(suggest, (item, index) => {
          return (
            <li
              className="suggest_list-item"
              key={index}
              onClick={()=>keywordhandle(item.keyword)}
            >
              <CustomIcon type="search" className="icon" />
              <span className="keyword">{item.keyword}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
