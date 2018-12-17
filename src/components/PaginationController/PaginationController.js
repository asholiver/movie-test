import React from "react";
import "./PaginationController.css";
import { ButtonIconOnly } from "./../../elements";
import { PaginationSummary } from "..";

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
      <PaginationSummary value={value} results={results} />
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
