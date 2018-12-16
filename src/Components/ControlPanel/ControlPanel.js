import React from "react";
import "./ControlPanel.css";
import { Div } from "./../../Elements";

const ControlPanel = ({ data }) => {
  return (
    <Div className="c-control-panel">
      {data.map((item, index) => [
        item.isVisible ? (
          <Div
            key={index}
            className={`c-control-panel__item ${
              item.isLarge ? "c-control-panel__item--large" : ""
            }`}
          >
            {item.component}
          </Div>
        ) : null
      ])}
    </Div>
  );
};

export default ControlPanel;
