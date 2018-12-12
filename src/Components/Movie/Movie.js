import React from "react";
import "./Movie.css";
import MovieDetail from "./MovieDetail";
import Loader from "./../Loader";
import Container from "./../Container";

const Movie = ({ data, isLoading }) => {
  const arr = [
    {
      title: "Language",
      detail: data.Language
    },
    {
      title: "Director",
      detail: data.Director
    },
    {
      title: "Year",
      detail: data.Year
    },
    {
      title: "Actors",
      detail: data.Actors
    },
    {
      title: "Runtime",
      detail: data.Runtime
    }
  ];
  if (isLoading) return <Loader isAlt={true} />;
  if (data.length === 0) return <p>No movie selected</p>;
  return (
    <Container>
      <div className="c-movie-container">
        <div className="c-movie__item">
          <h3>{data.Title}</h3>
          <p>{data.Genre}</p>
          <p>{data.Plot}</p>
          {arr.map((item, index) => (
            <MovieDetail key={index} item={item} />
          ))}
        </div>
        <div className="c-movie__item">
          <img className="c-image" alt={data.Title} src={data.Poster} />
        </div>
      </div>
    </Container>
  );
};

export default Movie;
