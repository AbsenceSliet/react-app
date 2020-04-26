import React, { useRef } from "react";
import "./index.scss";
import classNames from "classnames";
import CustomIcon from "@/components/CustomIcon";
import { isEmpty } from "lodash";
export default (props) => {
  let { className, value, placeholder, searchFocus, searchchange } = props;
  const inputRef = useRef(null);
  const focusHandle = () => {
    searchFocus();
  };
  const changeHandle = (event) => {
    searchchange(event.target.value);
  };
  const cancelHandle = () => {};

  return (
    <section
      className={classNames("Input-wrapper", className && className.split(" "))}
    >
      <label htmlFor="searchInput">
        <div className="placeholder">
          <CustomIcon type="search" />
          {isEmpty(value) && placeholder}
        </div>
      </label>
      <div className="input">
        <input
          type="search"
          id="searchInput"
          value={value}
          ref={inputRef}
          onFocus={focusHandle}
          onChange={changeHandle}
        />
        {!isEmpty(value) && (
          <CustomIcon
            className="icon-cancel"
            type="cancel"
            onClick={cancelHandle}
          />
        )}
      </div>
    </section>
  );
};
