import React, { useEffect, useState } from "react";
import { hotSearch } from "@/constants/api";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchHot,
  setSearchValue,
  setSearchHistory,
} from "@/store/modules/search/action";
import { isEmpty, map, lte } from "lodash";
import CustomIcon from "@/components/CustomIcon";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
let hostLoaded = false;

const SearchHistory = () => {
  const dispatch = useDispatch();
  const historys = useSelector((state) => state.search.historys);
  const router = useHistory();
  const [historyData, setHistoryData] = useState(historys);

  const clearHistory = () => {
    dispatch(setSearchHistory(""));
    setHistoryData([]);
  };
  const historyLink = (item) => {
    dispatch(setSearchHistory(item));
    dispatch(setSearchValue(item));
    router.push(`/search?query=${item}`);
  };
  useEffect(() => {
    console.log(historys, "searchhistory");
  }, [historys]);
  return historyData.length > 0 ? (
    <div className="historys">
      <p className="historys_header">
        <span>搜索历史</span>
        <CustomIcon
          className="icon-delete"
          type="delete"
          onClick={clearHistory}
        />
      </p>
      <ul>
        {map(historys, (item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                historyLink(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    ""
  );
};
const HotItem = ({ item, number }) => {
  const { searchWord, iconUrl, content } = item;
  const dispatch = useDispatch();
  const router = useHistory();
  const hotClickHandle = (value) => {
    dispatch(setSearchHistory(value));
    dispatch(setSearchValue(value));
    router.push(`/search?query=${value}`);
  };
  return (
    <li
      className={classNames("item", lte(number, 4) ? "active" : "")}
      onClick={() => hotClickHandle(searchWord)}
    >
      <p className="item_sort">{number}</p>
      <div className="item_content">
        <h6>
          <span>{searchWord}</span>
          {iconUrl && <img src={iconUrl} alt={searchWord} />}
        </h6>
        <p className="description">{content}</p>
      </div>
    </li>
  );
};
export default () => {
  const dispatch = useDispatch();
  const hotData = useSelector((state) => state.search.hot);
  console.log("hot - page - show");
  useEffect(() => {
    if (!hostLoaded) {
      hostLoaded = true;
      hotSearch().then(
        (res) => {
          const { code, data } = res.data;
          if (code === 200 && !isEmpty(data)) {
            dispatch(setSearchHot(data));
          }
        },
        (err) => {}
      );
    }
  }, [dispatch]);
  return (
    <section className="hot">
      <SearchHistory />
      <h3 className="hot-title">热搜榜</h3>
      <ul className="hot-warpper">
        {hotData &&
          map(hotData, (item, index) => (
            <HotItem item={item} key={index} number={index + 1} />
          ))}
      </ul>
    </section>
  );
};
