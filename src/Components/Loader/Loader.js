import React from "react";
import "./Loader.css";

const Loader = ({ size, children }) => {
  return (
    <div className="c-loader-container">
      <div className="c-loader" />
    </div>
  );
};

export default Loader;
