import React, { useEffect, useState, useRef } from "react";
import { getSearchMusic } from "@/constants/api";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUrlQuery } from "@/utils/tools";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import SongItem from "@/components/SongItem";
import "./index.scss";

BScroll.use(Pullup);
const limit = 20;

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
      <ul className="songs">
        {searchList &&
          searchList.map((item, index) => (
            <SongItem query={query} item={item} key={index} />
          ))}
      </ul>
    </div>
  );
};
