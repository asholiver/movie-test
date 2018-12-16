import React from "react";
import "./Movie.css";

const MovieDetail = ({ item }) => {
  return (
    <p className="c-movie__summary">
      {!item.isTitleHidden ? <strong>{item.title}: </strong> : null}
      {item.detail}.
    </p>
  );
};

export default MovieDetail;
