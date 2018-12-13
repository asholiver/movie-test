import React from "react";
import "./Fieldset.css";
import classNames from "classnames";

const Fieldset = ({ legendText, children, isHidden }) => {
  const classes = classNames({
    "c-fieldset__legend": !isHidden,
    "h-hide-visually": isHidden
  });
  return (
    <fieldset>
      <legend className={classes}>{legendText}</legend>
      {children}
    </fieldset>
  );
};

export default Fieldset;
