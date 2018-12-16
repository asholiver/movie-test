import React, { Component, Fragment } from "react";
import "./Movie.css";
import axios from "axios";
import { EmptyElement, Image, Loader, MovieDetail, Para, Title } from "..";

class Movie extends Component {
  state = {
    activeMovie: [],
    isLoading: false,
    previousMovies: [],
    id: ""
  };

  updateArray = () => {
    let newArray = this.state.previousMovies;
    newArray.push(this.state.activeMovie);
    this.setState({
      previousMovies: newArray
    });
  };

  handleData = async id => {
    this.setState({ isLoading: !this.state.isLoading });
    await axios
      .get(`http://www.omdbapi.com/?apikey=64d9571e&i=${id}`)
      .then(response => {
        this.setState({
          id: id,
          activeMovie: response.data,
          isLoading: !this.state.isLoading
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
    this.updateArray();
  };

  findMovieById = (array, id) => {
    return array.find(element => {
      return element.imdbID === id;
    });
  };

  componentWillReceiveProps = props => {
    const id = props.id;
    const searchedBeforeEl = this.findMovieById(this.state.previousMovies, id);
    if (id !== this.state.id) {
      if (searchedBeforeEl) {
        this.setState({ activeMovie: searchedBeforeEl, id });
      } else {
        this.handleData(id);
      }
    }
  };

  render() {
    const { isLoading, activeMovie } = this.state;

    const arr = [
      {
        title: "Plot",
        detail: activeMovie.Plot,
        isTitleHidden: true
      },
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
              <Title text={activeMovie.Title} />
              <Para classes="c-movie__info">{activeMovie.Genre}</Para>
              {arr.map((item, index) => (
                <MovieDetail key={index} item={item} />
              ))}
            </div>
            <div className="c-movie__item">
              <Image alt={activeMovie.Title} src={activeMovie.Poster} />
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Movie;
