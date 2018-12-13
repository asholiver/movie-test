import React from "react";
import "./PaginationController.css";
import { ButtonIconOnly } from "..";

const PaginationController = ({ onClick, value, results }) => {
  return (
    <div className="c-pagination">
      <ButtonIconOnly
        buttonValue={value - 1}
        buttonOnClick={onClick}
        icon="arrow"
        classes="c-pagination__button c-pagination__button-left"
        size="x-small"
        helpText="Previous page"
        isDisabled={value === 1}
      />
      <div className="c-pagination__summary">
        <p className="c-pagination__title">Page {value}</p>
        <span className="c-pagination__info">{results} results</span>
      </div>
      <ButtonIconOnly
        buttonValue={value + 1}
        buttonOnClick={onClick}
        icon="arrow"
        classes="c-pagination__button"
        size="x-small"
        helpText="Next page"
        isDisabled={value === results}
      />
    </div>
  );
};

export default PaginationController;
