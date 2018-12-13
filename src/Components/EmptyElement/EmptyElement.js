import React from "react";
import "./EmptyElement.css";

const EmptyElement = ({ text }) => {
  return (
    <div className="c-empty-element">
      <p>{text}</p>
    </div>
  );
};

export default EmptyElement;
