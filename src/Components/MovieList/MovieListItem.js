import React from "react";
import "./MovieList.css";
import classNames from "classnames";
import { ButtonOverlay, Icon, Title } from "./../../Elements";

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
