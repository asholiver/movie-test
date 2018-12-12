import React from "react";
import "./List.css";
import classNames from "classnames";

const ListItem = ({ onClick, title, year, value, isActive }) => {
  const classes = classNames({
    "c-list__item": true,
    "is-active": isActive
  });
  return (
    <li className={classes}>
      <h3 className="c-list__item--title">{title}</h3>
      <span className="c-list__item--info">{year}</span>
      <button
        type="button"
        className="c-list__item--trigger"
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
