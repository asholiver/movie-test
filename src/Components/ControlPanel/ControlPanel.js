import React from "react";
import "./ControlPanel.css";

const ControlPanel = ({ data }) => {
  return (
    <div className="c-control-panel">
      {data.map((item, index) => [
        item.isVisible ? (
          <div
            key={index}
            className={`c-control-panel__item ${
              item.isLarge ? "c-control-panel__item--large" : ""
            }`}
          >
            {item.component}
          </div>
        ) : null
      ])}
    </div>
  );
};

export default ControlPanel;
