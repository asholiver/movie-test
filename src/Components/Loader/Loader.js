import React from "react";
import "./Loader.css";
import classNames from "classnames";
import { Div } from "./../../Elements";

const Loader = ({ size, children, isAlt }) => {
  const classes = classNames({
    "c-loader-container": true,
    "c-loader-container--alt": isAlt
  });
  return (
    <Div className={classes}>
      <Div className="c-loader" />
    </Div>
  );
};

export default Loader;
