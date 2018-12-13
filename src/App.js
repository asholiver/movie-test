import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import {
  ControlPanel,
  List,
  Movie,
  PaginationController,
  SearchController
} from "./Components";
import { Page, Aside, Main } from "./Layout";

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
    errorMessage: "",
    movieId: ""
  };

  getListData = (search, pageNumber = 1) => {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=64d9571e&s=${search}&page=${pageNumber}`
      )
      .then(response => {
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
            pageNumber: Number(pageNumber),
            previousSearch: search
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

  activateMovie = e => {
    this.setState({ movieId: Number(e.target.value) });
  };

  search = e => {
    e.preventDefault();
    this.setState({ isLoading: !this.state.isLoading });
    this.getListData(this.state.newSearch);
  };

  switchPage = e => {
    const newPage = e.target.value;
    this.setState({ isLoading: !this.state.isLoading });
    this.getListData(this.state.previousSearch, newPage);
  };

  render() {
    const {
      activeMovie,
      movieList,
      isLoading,
      isMovieLoading,
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
          <List
            arr={movieList}
            onClick={this.getMovieData}
            active={activeMovie.imdbID}
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
      <Page>
        <Aside>
          <ControlPanel data={controlPanelItems} />
        </Aside>
        <Main>
          <Movie id={movieId} data={activeMovie} isLoading={isMovieLoading} />
        </Main>
      </Page>
    );
  }
}

export default App;
