import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { globalName } from "@/utils/tools";
import Hot from "./hot";
import "./index.scss";
export default () => {
  const active = useSelector((state) => state.search.active);

  return <div className={`${globalName}home`}>{active ? <Hot /> : "home"}</div>;
};
