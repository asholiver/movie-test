import React, { Component } from "react";
import "./Movie.css";
import axios from "axios";
import { EmptyElement, Loader, Movie } from "..";

class MovieContainer extends Component {
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

  getData = async id => {
    this.setState({ isLoading: !this.state.isLoading });
    await axios
      .get(`http://www.omdbapi.com/?apikey=64d9571e&i=${id}`)
      .then(response => {
        const data = response.data;
        this.setState({
          id: id,
          activeMovie: {
            Title: data.Title,
            Genre: data.Genre,
            Plot: data.Plot,
            Poster: data.Poster,
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
          <EmptyElement text="No movie selected" size="large" />
        ) : (
          <Movie data={activeMovie} />
        )}
      </div>
    );
  }
}

export default MovieContainer;
