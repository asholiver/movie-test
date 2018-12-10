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
      <button
        type="button"
        className="c-list__item--trigger"
        onClick={onClick}
        value={value}
      />
      <h3 className="c-list__item--title">{title}</h3>
      <span className="c-list__item--info">{year}</span>
      {isActive ? <p>active</p> : null}
    </li>
  );
};

export default ListItem;
