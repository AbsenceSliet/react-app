import React from "react";
import "./index.scss";
const CustomIcon = ({
  type,
  color,
  className = "",
  size = "xs",
  ...restProps
}) => (
  <svg
    className={`am-icon am-icon-${type} svg-icon am-icon-${size}  ${className}`}
    color={color}
    {...restProps}
  >
    <use xlinkHref={`#icon-${type}`} />
  </svg>
);
export default CustomIcon;
