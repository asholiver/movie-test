import React from "react";
import "./Button.css";
import { Icon } from "..";

const ButtonIconOnly = ({
  buttonOnClick,
  icon,
  classes,
  size,
  helpText,
  buttonValue,
  type,
  isDisabled
}) => (
  <button
    value={buttonValue}
    type={type == null ? "button" : type}
    className={`c-button-icon-only ${classes != null ? classes : ""}`}
    onClick={buttonOnClick}
    disabled={isDisabled}
  >
    <span className="h-hide-visually">{helpText}</span>
    <Icon icon={icon} size={size} />
  </button>
);

export default ButtonIconOnly;
