import React from "react";
import "./Loader.css";
import classNames from "classnames";

const Loader = ({ size, children, isAlt }) => {
  const classes = classNames({
    "c-loader-container": true,
    "c-loader-container--alt": isAlt
  });
  return (
    <div className={classes}>
      <div className="c-loader" />
    </div>
  );
};

export default Loader;
