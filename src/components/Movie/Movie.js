import React, { Fragment } from "react";
import "./Movie.css";
import { Image, Heading } from "./../../elements";
import { objectMap } from "./../../utils";
import { MovieDetail, ImagePlaceholder } from "..";
import { API_EMPTY_TEXT } from "./../../constants";

const Movie = ({ data }) => {
  return (
    <Fragment>
      <div className="c-movie__item">
        <Heading text={data.Title} />
        <p className="c-movie__info">{data.Genre}</p>
        <p className="c-movie__summary">{data.Plot}</p>
        {objectMap(data.Details, (key, value, index) => (
          <MovieDetail key={index} title={key} detail={value} />
        ))}
      </div>
      <div className="c-movie__item">
        {data.Poster !== API_EMPTY_TEXT ? (
          <Image alt={data.Title} src={data.Poster} />
        ) : (
          <ImagePlaceholder />
        )}
      </div>
    </Fragment>
  );
};

export default Movie;
