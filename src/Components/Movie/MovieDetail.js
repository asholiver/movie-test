import React from "react";
import "./Movie.css";

const MovieDetail = ({ item }) => {
  return (
    <p>
      <strong>{item.title}: </strong>
      {item.detail}.
    </p>
  );
};

export default MovieDetail;
