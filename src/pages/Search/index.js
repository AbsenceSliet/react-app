import React, { useEffect } from "react";
import { getSearchMusic } from "@/constants/api";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUrlQuery } from "@/utils/tools";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import "./index.scss";
BScroll.use(Pullup);
const limit = 20;
export default () => {
  const route = useHistory();
  const { query } = getUrlQuery();
  useEffect(() => {
    new BScroll("#search__list", {
      scrollY: true,
      pullUpLoad: true,
    });
    getSearchMusic({ keywords: query, offset: 0, limit }).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div className="search_main" id="search__list">
      <ul>
        {new Array(20).fill(0).map((item, index) => (
          <li key={index}>{index}</li>
        ))}
      </ul>
    </div>
  );
};
