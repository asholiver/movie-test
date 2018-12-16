import React from "react";
import "./EmptyElement.css";
import classNames from "classnames";
import { Div, Para } from "./../../Elements";

const EmptyElement = ({ text, size }) => {
  const classes = classNames({
    "c-empty-element": true,
    [`c-empty-element--${size}`]: size == null ? false : true
  });
  return (
    <Div className={classes}>
      <Para>{text}</Para>
    </Div>
  );
};

export default EmptyElement;
