import React from "react";
import "./Button.css";

const ButtonOverlay = ({ onClick, helpText, value }) => (
  <button
    type="button"
    className="c-button-overlay"
    onClick={onClick}
    value={value}
  >
    <span className="h-hide-visually">{helpText}</span>
  </button>
);

export default ButtonOverlay;
