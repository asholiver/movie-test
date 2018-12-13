import React, { Fragment } from "react";
import "./Movie.css";
import { Container, EmptyElement, Loader, MovieDetail } from "..";

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

  return (
    <Container>
      <div className="c-movie-container">
        <div className="c-movie__item">
          {data.length === 0 ? (
            <EmptyElement text="No movie selected" size="large" />
          ) : (
            <Fragment>
              <h3>{data.Title}</h3>
              <p>{data.Genre}</p>
              <p>{data.Plot}</p>
              {arr.map((item, index) => (
                <MovieDetail key={index} item={item} />
              ))}
            </Fragment>
          )}
        </div>
        <div className="c-movie__item">
          <img className="c-image" alt={data.Title} src={data.Poster} />
        </div>
      </div>
    </Container>
  );
};

export default Movie;
