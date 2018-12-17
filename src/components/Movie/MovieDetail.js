import React from "react";
import "./Movie.css";

const MovieDetail = ({ title, detail }) => {
  return (
    <p className="c-movie__summary">
      <strong>{title}:</strong> {detail}.
    </p>
  );
};

export default MovieDetail;
