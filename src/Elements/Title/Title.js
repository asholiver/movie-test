import React from "react";
import "./Title.css";
import classNames from "classnames";

const Title = ({ text, size, classes }) => {
  const baseClasses = classNames({
    "c-title": true,
    [`c-title--${size}`]: size == null ? false : true,
    [classes]: classes == null ? false : true
  });
  return <h3 className={baseClasses}>{text}</h3>;
};

export default Title;
