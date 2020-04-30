import React, { useEffect, useState, useRef } from "react";
import { getSearchMusic } from "@/constants/api";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUrlQuery } from "@/utils/tools";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import "./index.scss";
import highlight from "@/utils/highlight";
BScroll.use(Pullup);
const limit = 20;
const SearchItem = (props) => {};
export default () => {
  const route = useHistory();
  const [searchList, setSearchList] = useState([]);
  const { query } = getUrlQuery();
  const bs = useRef(null);
  useEffect(() => {
    bs.current = new BScroll("#search__list", {
      scrollY: true,
      pullUpLoad: true,
      probeType: 1,
    });
    getSearchMusic({ keywords: query, offset: 0, limit }).then((res) => {
      console.log(res.data.result);
      setSearchList(res.data.result.songs);
      bs.current.refresh();
    });
  }, [query]);
  return (
    <div className="search_main" id="search__list">
      <ul>
        {searchList &&
          searchList.map((item, index) => (
            <li key={index}>{highlight(item.name, query)}</li>
          ))}
      </ul>
    </div>
  );
};
