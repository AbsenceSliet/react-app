import React, { useRef } from "react";
import "./index.scss";
import classNames from "classnames";
import CustomIcon from "@/components/CustomIcon";
import { isEmpty,throttle } from "lodash";

export default (props) => {
  let { className, value, placeholder, searchFocus, searchChange,searchSubmit } = props;
  const inputRef = useRef(null);
  const focusHandle = () => {
    searchFocus();
  };
  const changeHandle =throttle( (event) => {
    event.persist()
    searchChange(event.target.value);
  },1500);
  const clearValue = () => {
    searchChange('');
    inputRef.current.focus()
  };
  const submitHandle =()=>{
    searchSubmit(value)
    inputRef.current.blur()
  }
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
          onSubmit={submitHandle}
        />
        {!isEmpty(value) && (
          <CustomIcon
            className="icon-cancel"
            type="cancel"
            onClick={clearValue}
          />
        )}
      </div>
    </section>
  );
};
