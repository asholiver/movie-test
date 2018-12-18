import React, { Component } from "react";
import "./../components/Movie/Movie.css";
import axios from "axios";
import { BlankSlate, Loader, Movie } from "../components";
import { API_URL } from "../config";

class MovieContainer extends Component {
  state = {
    activeMovie: [],
    isLoading: false,
    previousMovies: [],
    id: ""
  };

  updateArray = () => {
    this.setState({
      previousMovies: this.state.previousMovies.concat([this.state.activeMovie])
    });
  };

  getData = async id => {
    this.setState({ isLoading: !this.state.isLoading });
    await axios
      .get(`${API_URL}i=${id}`)
      .then(response => {
        const { data } = response;
        if (data.Error) {
          this.setState({
            errorMessage: data.Error,
            isLoading: false
          });
        } else {
          this.setState({
            id: id,
            activeMovie: {
              Title: data.Title,
              Genre: data.Genre,
              Plot: data.Plot,
              Poster: data.Poster,
              id: data.imdbID,
              Details: {
                Language: data.Language,
                Director: data.Director,
                Year: data.Year,
                Actors: data.Actors,
                Runtime: data.Runtime
              }
            },
            isLoading: !this.state.isLoading
          });
        }
      })
      .catch(error => {
        this.setState({
          errorMessage: "Hmm... something went wrong.",
          isLoading: false
        });
      });
    this.updateArray();
  };

  findMovieById = (arr, id) => arr.find(el => el.id === id);

  componentWillReceiveProps = props => {
    const { id } = props;
    if (id !== this.state.id) {
      const searchedBeforeEl = this.findMovieById(
        this.state.previousMovies,
        id
      );
      if (searchedBeforeEl) {
        this.setState({ activeMovie: searchedBeforeEl, id });
      } else {
        this.getData(id);
      }
    }
  };

  render() {
    const { isLoading, activeMovie } = this.state;
    if (isLoading) return <Loader isAlt={true} />;
    return (
      <div className="c-movie-container">
        {activeMovie.length === 0 ? (
          <BlankSlate text="No movie selected" size="large" />
        ) : (
          <Movie data={activeMovie} />
        )}
      </div>
    );
  }
}

export default MovieContainer;
