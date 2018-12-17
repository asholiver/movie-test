import React from "react";
import "./PaginationController.css";

const PaginationSummary = ({ value, results }) => {
  return (
    <div className="c-pagination__summary">
      <p className="c-pagination__title">Page {value}</p>
      <span className="c-pagination__info">{results} results</span>
    </div>
  );
};

export default PaginationSummary;
