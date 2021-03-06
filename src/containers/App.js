import React, { Component } from "react";
import axios from "axios";
import {
  ControlPanel,
  MovieList,
  PaginationController,
  SearchController
} from "./../components";
import { Main, Aside, Section } from "./../layout";
import { API_URL } from "./../config";
import { INITIAL_SEARCH_VALUE } from "./../constants";
import MovieContainer from "./MovieContainer";

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
      .get(`${API_URL}s=${search}&page=${pageNumber}`)
      .then(response => {
        const { data } = response;
        // deliberately left the ability to empty search for the error to be shown.
        if (data.Error) {
          this.setState({
            errorMessage: data.Error,
            isLoading: false
          });
        } else {
          this.setState({
            movieList: data.Search,
            totalResults: Number(data.totalResults),
            pageNumber: Number(pageNumber),
            isLoading: false,
            previousSearch: search,
            errorMessage: ""
          });
        }
      })
      .catch(error => {
        this.setState({
          errorMessage: "Hmm... something went wrong.",
          isLoading: false
        });
      });
  };

  componentDidMount = () => {
    // no option to return data with empty search on api, so passed initial search param to populate movie list
    this.getListData(INITIAL_SEARCH_VALUE);
  };

  handleChange = e => {
    const el = e.target;
    this.setState({
      isLoading: !this.state.isLoading,
      totalResults: 0,
      [el.name]: el.value
    });
    this.getListData(el.value);
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
