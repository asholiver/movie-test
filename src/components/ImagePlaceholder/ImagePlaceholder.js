import React from "react";
import "./ImagePlaceholder.css";
import classNames from "classnames";
import { Icon } from "./../../elements";

const ImagePlaceholder = () => {
  const classes = classNames({
    "c-image-placeholder": true
  });
  return (
    <div className={classes}>
      <Icon icon="placeholder" size="large" />
    </div>
  );
};

export default ImagePlaceholder;
