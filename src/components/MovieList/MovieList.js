import React from "react";
import "./MovieList.css";
import { BlankSlate, Loader, MovieListItem } from "..";

const MovieList = ({
  arr,
  isOrdered,
  onClick,
  active,
  isLoading,
  errorMessage
}) => {
  const Tag = isOrdered ? "ol" : "ul";
  if (isLoading) return <Loader />;
  if (errorMessage) return <BlankSlate text={errorMessage} />;
  return (
    <Tag className="c-movie-list">
      {arr.map((item, index) => (
        <MovieListItem
          key={index}
          onClick={onClick}
          title={item.Title}
          year={item.Year}
          value={item.imdbID}
          isActive={active === item.imdbID}
        />
      ))}
    </Tag>
  );
};

export default MovieList;
