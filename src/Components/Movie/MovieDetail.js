import React from "react";
import "./Movie.css";
import { Para, Strong } from "..";

const MovieDetail = ({ item }) => {
  return (
    <Para classes="c-movie__summary">
      {!item.isTitleHidden ? <Strong text={`${item.title}: `} /> : null}
      {item.detail}.
    </Para>
  );
};

export default MovieDetail;
