import React from "react";
import "./PaginationController.css";
import ButtonIconOnly from "./../Buttons";

const PaginationController = ({ onClick, value, results }) => {
  return (
    <div className="c-control-panel__pagination">
      <ButtonIconOnly
        buttonValue={value - 1}
        buttonOnClick={onClick}
        icon="arrow"
        classes="c-control-panel__button c-control-panel__button-left"
        size="x-small"
        helpText="Previous page"
        isDisabled={value === 1}
      />
      <div className="c-control-panel__pagination-info">
        <p>Page {value}</p>
        <span>{results} results</span>
      </div>
      <ButtonIconOnly
        buttonValue={value + 1}
        buttonOnClick={onClick}
        icon="arrow"
        classes="c-control-panel__button"
        size="x-small"
        helpText="Next page"
        isDisabled={value === results}
      />
    </div>
  );
};

export default PaginationController;
