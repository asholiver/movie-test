import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Container, List, Movie, TextField } from "./Components";

class App extends Component {
  state = {
    newSearch: "",
    activeMovie: [],
    isActive: false,
    isLoading: false,
    movieList: [],
    totalResults: 0
  };

  componentDidMount = () => {
    axios
      .get("http://www.omdbapi.com/?s=big&apikey=64d9571e")
      .then(response => {
        console.log(response.data.Search);
        this.setState({
          movieList: response.data.Search,
          totalResults: Number(response.data.totalResults)
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  findMovieById = (array, id) => {
    return array.find(element => {
      return element.imdbID === id;
    });
  };

  activate = e => {
    const id = e.target.value;
    const activeMovie = this.findMovieById(this.state.movies, id);
    this.setState({ activeMovie: activeMovie, isActive: true });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  search = e => {
    e.preventDefault();
    this.setState({ isLoading: !this.state.isLoading });
    let newList = [];
    if (this.state.newSearch.length) {
      newList = this.state.movies.filter(item => {
        const containsString = item.Title.toLowerCase().includes(
          this.state.newSearch
        );
        return containsString ? item : null;
      });
    } else {
      newList = this.state.movies;
    }
    this.setState({ movieList: newList, isLoading: !this.state.isLoading });
  };

  render() {
    const { activeMovie, isActive, movieList, isLoading } = this.state;

    return (
      <Container>
        <div className="l-layout">
          <div className="l-layout--left">
            <Container size="small">
              <form onSubmit={this.search}>
                <fieldset>
                  <legend className="h-hide-visually">Search movies</legend>
                  <TextField
                    label="Search movies"
                    isLabelHidden={true}
                    type="search"
                    name="newSearch"
                    onChange={this.handleChange}
                    placeholder="Search movies"
                  />
                </fieldset>
              </form>
              {isLoading ? (
                <div>loading</div>
              ) : (
                <List
                  arr={movieList}
                  onClick={this.activate}
                  active={activeMovie.imdbID}
                />
              )}
            </Container>
          </div>
          <div className="l-layout--right">
            <Container>
              {isActive === true ? <Movie data={activeMovie} /> : null}
            </Container>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
