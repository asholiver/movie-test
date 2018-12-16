import React from "react";
import "./MovieList.css";
import classNames from "classnames";
import { ButtonOverlay, Div, Icon, Li, Para, Title } from "..";

const MovieListItem = ({ onClick, title, year, value, isActive }) => {
  const classes = classNames({
    "c-movie-list-item": true,
    "is-active": isActive
  });
  return (
    <Li className={classes}>
      <Div className="c-movie-list-item__title-container">
        <Title text={title} size="small" classes="c-movie-list-item__title" />
        <Icon icon="star" classes="c-movie-list-item__icon" size="x-small" />
      </Div>

      <Para classes="c-movie-list-item__info">{year}</Para>
      <ButtonOverlay
        onClick={onClick}
        value={value}
        helpText={`${title} - Click to view`}
      />
    </Li>
  );
};

export default MovieListItem;
