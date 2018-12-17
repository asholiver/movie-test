import React from "react";
import "./MovieList.css";
import classNames from "classnames";
import { ButtonOverlay, Icon } from "./../../elements";

const MovieListItem = ({ onClick, title, year, value, isActive }) => {
  const classes = classNames({
    "c-movie-list-item": true,
    "is-active": isActive
  });
  return (
    <li className={classes}>
      <div className="c-movie-list-item__title-container">
        <h3 className="c-movie-list-item__title">{title}</h3>
        <Icon icon="star" classes="c-movie-list-item__icon" size="x-small" />
      </div>

      <p className="c-movie-list-item__info">{year}</p>
      <ButtonOverlay
        onClick={onClick}
        value={value}
        helpText={`${title} - Click to view`}
      />
    </li>
  );
};

export default MovieListItem;
