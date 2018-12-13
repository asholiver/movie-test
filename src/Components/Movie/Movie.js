import React, { Component, Fragment } from "react";
import "./Movie.css";
import axios from "axios";
import { EmptyElement, Loader, MovieDetail } from "..";

class Movie extends Component {
  state = {
    activeMovie: [],
    isLoading: false,
    previousMovies: [],
    movieId: this.props.id
  };

  componentDidMount = () => {
    console.log(`movie - ${this.state.movieId}`);
    const id = this.state.movieId;
    if (id) {
      this.setState({ isLoading: !this.state.isLoading });
      axios
        .get(`http://www.omdbapi.com/?apikey=64d9571e&i=${id}`)
        .then(response => {
          console.log(response);
          this.setState({
            activeMovie: response.data,
            isLoading: !this.state.isLoading
          });
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  };

  render() {
    const { isLoading, activeMovie } = this.state;

    const arr = [
      {
        title: "Language",
        detail: activeMovie.Language
      },
      {
        title: "Director",
        detail: activeMovie.Director
      },
      {
        title: "Year",
        detail: activeMovie.Year
      },
      {
        title: "Actors",
        detail: activeMovie.Actors
      },
      {
        title: "Runtime",
        detail: activeMovie.Runtime
      }
    ];

    if (isLoading) return <Loader isAlt={true} />;

    return (
      <div className="c-movie-container">
        {activeMovie.length === 0 ? (
          <EmptyElement text="No movie selected" size="large" />
        ) : (
          <Fragment>
            <div className="c-movie__item">
              <h3 className="c-movie__title">{activeMovie.Title}</h3>
              <p className="c-movie__info">{activeMovie.Genre}</p>
              <p className="c-movie__summary">{activeMovie.Plot}</p>
              {arr.map((item, index) => (
                <MovieDetail key={index} item={item} />
              ))}
            </div>
            <div className="c-movie__item">
              <img
                className="c-movie__image"
                alt={activeMovie.Title}
                src={activeMovie.Poster}
              />
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Movie;
