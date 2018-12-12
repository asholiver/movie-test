import React from "react";
import "./List.css";
import classNames from "classnames";

const ListItem = ({ onClick, title, year, value, isActive }) => {
  const classes = classNames({
    "c-list-item": true,
    "is-active": isActive
  });
  return (
    <li className={classes}>
      <div className="c-list-item__title-container">
        <h3 className="c-list-item__title">{title}</h3>
      </div>

      <span className="c-list-item__info">{year}</span>
      <button
        type="button"
        className="c-list-item__trigger"
        onClick={onClick}
        value={value}
      >
        <span className="h-hide-visually">{title} - Click to view</span>
      </button>
      {isActive ? <p>active</p> : null}
    </li>
  );
};

export default ListItem;
