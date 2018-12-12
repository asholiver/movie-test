import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import {
  Container,
  List,
  Movie,
  PaginationController,
  SearchController
} from "./Components";

class App extends Component {
  state = {
    newSearch: "",
    activeMovie: [],
    isLoading: false,
    movieList: [],
    totalResults: 0,
    pageNumber: 1,
    isMovieLoading: false,
    previousSearch: "",
    errorMessage: ""
  };

  getListData = (search, pageNumber = 1) => {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=64d9571e&s=${search}&page=${pageNumber}`
      )
      .then(response => {
        console.log(response);
        if (response.data.Error) {
          this.setState({
            errorMessage: response.data.Error,
            isLoading: false
          });
        } else {
          this.setState({
            movieList: response.data.Search,
            totalResults: Number(response.data.totalResults),
            isLoading: false,
            pageNumber: pageNumber,
            previousSearch: search
          });
        }
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  componentDidMount = () => {
    // no option to return data with empty search on api, so passed initial search param to populate movie list
    this.getListData("big");
  };

  getMovieData = e => {
    const id = e.target.value;
    this.setState({ isMovieLoading: !this.state.isMovieLoading });
    axios
      .get(`http://www.omdbapi.com/?apikey=64d9571e&i=${id}`)
      .then(response => {
        this.setState({
          activeMovie: response.data,
          isMovieLoading: !this.state.isMovieLoading
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  search = e => {
    e.preventDefault();
    this.setState({ isLoading: !this.state.isLoading });
    this.getListData(this.state.newSearch);
  };

  switchPage = e => {
    const newPage = e.target.value;
    this.setState({ isLoading: !this.state.isLoading });
    this.getListData(this.state.newSearch, newPage);
  };

  render() {
    const {
      activeMovie,
      movieList,
      isLoading,
      isMovieLoading,
      pageNumber,
      totalResults,
      errorMessage
    } = this.state;

    return (
      <div className="l-layout">
        <div className="l-layout--left">
          <Container>
            <div className="c-control-panel">
              <div className="c-control-panel__item">
                <SearchController
                  onSubmit={this.search}
                  onClick={this.handleChange}
                />
              </div>
              <div className="c-control-panel__item c-control-panel__item--large">
                <List
                  arr={movieList}
                  onClick={this.getMovieData}
                  active={activeMovie.imdbID}
                  errorMessage={errorMessage}
                  isLoading={isLoading}
                />
              </div>
              {totalResults > 10 ? (
                <div className="c-control-panel__item">
                  <PaginationController
                    onClick={this.switchPage}
                    value={pageNumber}
                    results={totalResults}
                  />
                </div>
              ) : null}
            </div>
          </Container>
        </div>
        <div className="l-layout--right">
          <Movie data={activeMovie} isLoading={isMovieLoading} />
        </div>
      </div>
    );
  }
}

export default App;
