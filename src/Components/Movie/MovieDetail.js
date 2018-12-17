import React from "react";
import "./Movie.css";
import { Para, Strong } from "./../../Elements";

const MovieDetail = ({ item }) => {
  return (
    <p className="c-movie__summary">
      <strong>{item.title}:</strong> {item.detail}.
    </p>
  );
};

export default MovieDetail;
