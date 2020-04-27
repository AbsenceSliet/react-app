import React from "react";
import { useSelector } from "react-redux";
import { globalName } from "@/utils/tools";
import Hot from "./hot";
import Suggest from "./suggest";
import "./index.scss";
export default () => {
  const active = useSelector((state) => state.search.active);
  const searchValue = useSelector((state) => state.search.value);
  return (
    <div className={`${globalName}home`}>
      {active ? searchValue ? <Suggest /> : <Hot /> : "home"}
    </div>
  );
};
