import React from "react";
import "./Image.css";

const Image = ({ src, alt }) => {
  return <img className="c-image" alt={alt} src={src} />;
};

export default Image;
