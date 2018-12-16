import React from "react";
import "./Image.css";
import classNames from "classnames";

const Image = ({ src, alt, classes }) => {
  const baseClasses = classNames({
    "c-image": true,
    [classes]: classes === null ? false : true
  });
  return <img className={baseClasses} alt={alt} src={src} />;
};

export default Image;
