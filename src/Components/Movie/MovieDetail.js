import React from "react";
import "./Movie.css";
import { Para, Strong } from "./../../Elements";

const MovieDetail = ({ item }) => {
  return (
    <Para className="c-movie__summary">
      {!item.isTitleHidden ? <Strong text={`${item.title}: `} /> : null}
      {item.detail}.
    </Para>
  );
};

export default MovieDetail;
