import React, { Component } from "react";
import axios from "axios";
import {
  ControlPanel,
  MovieContainer,
  MovieList,
  PaginationController,
  SearchController
} from "./components";
import { Main, Aside, Section } from "./layout";

class App extends Component {
  state = {
    newSearch: "",
    isLoading: false,
    movieList: [],
    totalResults: 0,
    pageNumber: 1,
    previousSearch: "",
    errorMessage: "",
    movieId: ""
  };

  getListData = (search, pageNumber = 1) => {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=64d9571e&s=${search}&page=${pageNumber}`
      )
      .then(response => {
        // deliberately left the ability to empty search for the error to be shown.
        if (response.data.Error) {
          this.setState({
            errorMessage: response.data.Error,
            isLoading: false
          });
        } else {
          this.setState({
            movieList: response.data.Search,
            totalResults: Number(response.data.totalResults),
            pageNumber: Number(pageNumber),
            isLoading: false,
            previousSearch: search,
            errorMessage: ""
          });
        }
      })
      .catch(function(error) {
        this.setState({
          errorMessage: "Hmm... something went wrong.",
          isLoading: false
        });
        // handle error
        console.log(error);
      });
  };

  componentDidMount = () => {
    // no option to return data with empty search on api, so passed initial search param to populate movie list
    this.getListData("big");
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ isLoading: !this.state.isLoading, totalResults: 0 });
    this.getListData(e.target.value);
  };

  activateMovie = e => {
    this.setState({ movieId: e.target.value });
  };

  search = e => {
    e.preventDefault();
    this.setState({ isLoading: !this.state.isLoading, totalResults: 0 });
    this.getListData(this.state.newSearch);
  };

  switchPage = e => {
    const newPage = e.target.value;
    this.setState({ isLoading: !this.state.isLoading });
    this.getListData(this.state.previousSearch, newPage);
  };

  render() {
    const {
      movieList,
      isLoading,
      pageNumber,
      totalResults,
      errorMessage,
      movieId
    } = this.state;
    const controlPanelItems = [
      {
        isVisible: true,
        component: (
          <SearchController
            onSubmit={this.search}
            onClick={this.handleChange}
          />
        )
      },
      {
        isVisible: true,
        isLarge: true,
        component: (
          <MovieList
            arr={movieList}
            onClick={this.activateMovie}
            active={movieId}
            errorMessage={errorMessage}
            isLoading={isLoading}
          />
        )
      },
      {
        isVisible: totalResults > 10,
        component: (
          <PaginationController
            onClick={this.switchPage}
            value={pageNumber}
            results={totalResults}
          />
        )
      }
    ];

    return (
      <Main>
        <Aside>
          <ControlPanel data={controlPanelItems} />
        </Aside>
        <Section>
          <MovieContainer id={movieId} />
        </Section>
      </Main>
    );
  }
}

export default App;
