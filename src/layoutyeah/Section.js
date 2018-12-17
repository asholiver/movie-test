import React from "react";
import "./Layout.css";

const Section = ({ children }) => {
  return <section className="l-layout__section">{children}</section>;
};

export default Section;
