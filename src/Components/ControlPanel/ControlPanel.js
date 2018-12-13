import React from "react";
import "./ControlPanel.css";
import Container from "../Container";

const ControlPanel = ({ data }) => {
  return (
    <Container>
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
    </Container>
  );
};

export default ControlPanel;
