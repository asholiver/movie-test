import React from "react";
import "./Title.css";
import classNames from "classnames";

const Title = ({ text, size, classes, level = 2 }) => {
  const Tag = `h${level}`;
  const baseClasses = classNames({
    "c-title": true,
    [`c-title--${size}`]: size == null ? false : true,
    [classes]: classes == null ? false : true
  });
  return <Tag className={baseClasses}>{text}</Tag>;
};

export default Title;
