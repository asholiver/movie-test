import React from "react";
import "./MovieList.css";
import classNames from "classnames";
import { Icon, Para, Title } from "..";

const MovieListItem = ({ onClick, title, year, value, isActive }) => {
  const classes = classNames({
    "c-movie-list-item": true,
    "is-active": isActive
  });
  return (
    <li className={classes}>
      <div className="c-movie-list-item__title-container">
        <Title text={title} size="small" classes="c-movie-list-item__title" />
        <Icon icon="star" classes="c-movie-list-item__icon" size="x-small" />
      </div>

      <Para classes="c-movie-list-item__info">{year}</Para>
      <button
        type="button"
        className="c-movie-list-item__trigger"
        onClick={onClick}
        value={value}
      >
        <span className="h-hide-visually">{title} - Click to view</span>
      </button>
    </li>
  );
};

export default MovieListItem;
