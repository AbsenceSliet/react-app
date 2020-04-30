import { createElement, Fragment } from "react";

const hightlight = (
  contents,
  keywords,
  tag = "span",
  props = { className: "hightlight" }
) => {
  let regex = new RegExp(`(${keywords})`, "gi");
  const nodes = contents.split(regex).map((res, index) => {
    if (res === keywords) {
      return createElement(tag, { ...props, key: index }, res);
    }
    return res;
  });

  return createElement(Fragment, null, nodes);
};
export default hightlight;
