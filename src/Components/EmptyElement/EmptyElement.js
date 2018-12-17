import React from "react";
import "./EmptyElement.css";
import classNames from "classnames";

const EmptyElement = ({ text, size }) => {
  const classes = classNames({
    "c-empty-element": true,
    [`c-empty-element--${size}`]: size == null ? false : true
  });
  return (
    <div className={classes}>
      <p>{text}</p>
    </div>
  );
};

export default EmptyElement;
