import React from "react";
import "./Label.css";
import classNames from "classnames";

const Label = ({ name, text, isLabelHidden }) => {
  const classes = classNames({
    "c-label": !isLabelHidden,
    "h-hide-visually": isLabelHidden
  });

  return (
    <label className={classes} htmlFor={`id_${name}`}>
      {text}
    </label>
  );
};

export default Label;
