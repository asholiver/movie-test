import React from "react";
import "./BlankSlate.css";
import classNames from "classnames";

const EmptyElement = ({ text, size }) => {
  const classes = classNames({
    "c-blank-slate": true,
    [`c-blank-slate--${size}`]: size == null ? false : true
  });
  return (
    <div className={classes}>
      <p>{text}</p>
    </div>
  );
};

export default EmptyElement;
