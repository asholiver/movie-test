import React from "react";
import "./PaginationController.css";
import { ButtonIconOnly, Div, Para, Span } from "..";

const PaginationController = ({ onClick, value, results }) => {
  return (
    <Div className="c-pagination">
      <ButtonIconOnly
        buttonValue={value - 1}
        buttonOnClick={onClick}
        icon="arrow"
        classes="c-pagination__button c-pagination__button-left"
        size="x-small"
        helpText="Previous page"
        isDisabled={value === 1}
      />
      <Div className="c-pagination__summary">
        <Para className="c-pagination__title">Page {value}</Para>
        <Span className="c-pagination__info">{results} results</Span>
      </Div>
      <ButtonIconOnly
        buttonValue={value + 1}
        buttonOnClick={onClick}
        icon="arrow"
        classes="c-pagination__button"
        size="x-small"
        helpText="Next page"
        isDisabled={value === results}
      />
    </Div>
  );
};

export default PaginationController;
