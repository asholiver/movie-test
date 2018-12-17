import React from "react";
import "./Heading.css";
import classNames from "classnames";

const Heading = ({ text, level = 2 }) => {
  const Tag = `h${level}`;
  const baseClasses = classNames({
    "c-heading": level === 2,
    "c-sub-heading": level === 3
  });
  return <Tag className={baseClasses}>{text}</Tag>;
};

export default Heading;
