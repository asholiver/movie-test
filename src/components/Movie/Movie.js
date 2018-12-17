import React, { Fragment } from "react";
import "./Movie.css";
import { Image, Heading } from "./../../elements";
import { MovieDetail, ImagePlaceholder } from "..";

const Movie = ({ data }) => {
  return (
    <Fragment>
      <div className="c-movie__item">
        <Heading text={data.Title} />
        <p className="c-movie__info">{data.Genre}</p>
        <p className="c-movie__summary">{data.Plot}</p>
        {Object.keys(data.Details).map((k, index) => (
          <MovieDetail key={index} title={k} detail={data.Details[k]} />
        ))}
      </div>
      <div className="c-movie__item">
        {data.Poster !== "N/A" ? (
          <Image alt={data.Title} src={data.Poster} />
        ) : (
          <ImagePlaceholder />
        )}
      </div>
    </Fragment>
  );
};

export default Movie;
