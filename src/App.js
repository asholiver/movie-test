import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import {
  ButtonIconOnly,
  Container,
  List,
  Loader,
  Movie,
  TextField
} from "./Components";

class App extends Component {
  state = {
    newSearch: "",
    activeMovie: [],
    isActive: false,
    isLoading: false,
    movieList: [],
    totalResults: 0,
    pageNumber: 1,
    isMovieLoading: false,
    previousSearch: ""
  };

  getListData = (search, pageNumber = 1) => {
    console.log(
      `http://www.omdbapi.com/?apikey=64d9571e&s=${search}&page=${pageNumber}`
    );
    axios
      .get(
        `http://www.omdbapi.com/?apikey=64d9571e&s=${search}&page=${pageNumber}`
      )
      .then(response => {
        console.log(response);
        this.setState({
          movieList: response.data.Search,
          totalResults: Number(response.data.totalResults),
          isLoading: false,
          pageNumber: pageNumber,
          previousSearch: search
        });
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
          isActive: true,
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
    console.log(this.state.previousSearch);
    console.log(this.state.isLoading);
    this.setState({ isLoading: !this.state.isLoading });
    this.getListData(this.state.previousSearch, newPage);
  };

  render() {
    const {
      activeMovie,
      isActive,
      movieList,
      isLoading,
      isMovieLoading,
      pageNumber,
      totalResults
    } = this.state;

    return (
      <div className="l-layout">
        <div className="l-layout--left">
          <Container>
            <div className="c-control-panel">
              <div className="c-control-panel__item">
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
              </div>
              <div className="c-control-panel__item c-control-panel__item--large">
                {isLoading ? (
                  <Loader />
                ) : (
                  <List
                    arr={movieList}
                    onClick={this.getMovieData}
                    active={activeMovie.imdbID}
                  />
                )}
              </div>
              {totalResults > 10 ? (
                <div className="c-control-panel__item">
                  <div className="c-control-panel__pagination">
                    <ButtonIconOnly
                      buttonValue={pageNumber - 1}
                      buttonOnClick={this.switchPage}
                      icon="arrow"
                      classes="c-control-panel__button c-control-panel__button-left"
                      size="x-small"
                      helpText="Previous page"
                      isDisabled={pageNumber === 1}
                    />
                    <div className="c-control-panel__pagination-info">
                      <p>Page {pageNumber}</p>
                      <span>{totalResults} results</span>
                    </div>
                    <ButtonIconOnly
                      buttonValue={pageNumber + 1}
                      buttonOnClick={this.switchPage}
                      icon="arrow"
                      classes="c-control-panel__button"
                      size="x-small"
                      helpText="Next page"
                      isDisabled={pageNumber === totalResults}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </Container>
        </div>
        <div className="l-layout--right">
          {isMovieLoading ? (
            <Loader isAlt={true} />
          ) : (
            [
              isActive ? (
                <Container key={activeMovie.imdbID}>
                  <Movie data={activeMovie} />
                </Container>
              ) : null
            ]
          )}
        </div>
      </div>
    );
  }
}

export default App;
