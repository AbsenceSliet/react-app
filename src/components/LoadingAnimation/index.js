import React from "react";
import "./index.scss";
import classNames from "classnames";
function LoadingAnimation({ className, type }) {
  let style = classNames("loading-animation", className, {
    [type]: type,
  });

  return (
    <div className={style}>
      <div className="spinner">
        <div className="spinner-container container1">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
        </div>
        <div className="spinner-container container2">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
        </div>
        <div className="spinner-container container3">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingAnimation;
