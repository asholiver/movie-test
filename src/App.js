import React, { Component } from "react";
import "./App.css";
import { Container, List } from "./Components";

class App extends Component {
  movies = [
    {
      Actors: "Macaulay Culkin, Joe Pesci, Daniel Stern, John Heard",
      Director: "Chris Columbus",
      Genre: "Comedy, Family",
      imdbID: "tt0099785",
      Language: "English",
      Plot:
        "It is Christmas time and the McCallister family is preparing for a vacation in Paris, France. But the youngest in the family named Kevin got into a scuffle with his older brother Buzz and was sent to his room which is on the third floor of his house. Then, the next morning, while the rest of the family was in a rush to make it to the airport on time, they completely forgot about Kevin who now has the house all to himself. Being home alone was fun for Kevin, having a pizza all to himself, jumping on his parents' bed, and making a mess. Then, Kevin discovers about two burglars, Harry and Marv, about to rob his house on Christmas Eve. Kevin acts quickly by wiring his own house with makeshift booby traps to stop the burglars and to bring them to justice.",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      Runtime: "103 min",
      Title: "Home Alone",
      Year: "1990"
    },
    {
      Actors: "Billy Bob Thornton, Tony Cox, Brett Kelly, Lauren Graham",
      Director: "Terry Zwigoff",
      Genre: "Comedy, Crime, Drama",
      imdbID: "tt0307987",
      Language: "English",
      Plot:
        "Willie T. Stokes is a convicted con man who's led a miserable life. He drinks heavily and constantly embarrasses himself publicly. He only works once a year dressed as Santa. But then come Christmas Eve, he and his pint-sized helper dwarf Marcus stage elaborate robberies and take their department stores for everything they got. This year, they hit a mall in suburban Phoenix, Arizona. This time around, Willie gets distracted by having sex with large women, a bartender who is attracted to Santas, and a kid who's convinced he's the real deal. However, this time around Marcus must once again put up with Willie's heavy drinking and a series of incidents that constantly shoot themselves in the foot. Not to mention a nosy department store security guard who's onto them and wants his cut of the loot. Will Willie and Marcus make it to next Christmas? Or will this be the year the dynamic duo finally face justice?",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA4Njg1MDcwN15BMl5BanBnXkFtZTYwMzAxNjM3._V1_SX300.jpg",
      Runtime: "91 min",
      Title: "Bad Santa",
      Year: "2003"
    },
    {
      Actors: "Arnold Schwarzenegger, Sinbad, Phil Hartman, Rita Wilson",
      Director: "Brian Levant",
      Genre: "Comedy, Family",
      imdbID: "tt0116705",
      Language: "English",
      Plot:
        "Meet Howard Langston, a salesman for a mattress company is constantly busy at his job, and he also constantly disappoints his son, after he misses his son's karate exposition, he tries hard to come up with a way to make it up to him, this is when his son tells Howard that he wants for Christmas is an action figure of his son's television hero, Turbo Man. Unfortunately for Howard, it is Christmas Eve, and every store is sold out of Turbo Man figures, now Howard must travel all over town and compete with everybody else including a mail man named Myron to find a Turbo Man action figure, and to make it to the Wintertainment parade which will feature Turbo Man.",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmJlYzViNzctMjQ1Ni00ZWQ4LThkN2YtMzI2ZGU5Nzk0NTAyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      Runtime: "89 min",
      Title: "Jingle All the Way",
      Year: "1996"
    }
  ];
  state = {
    newSearch: "",
    activeMovie: [],
    isActive: false,
    isLoading: false,
    movies: this.movies,
    movieList: this.movies
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
                  <div className="c-input-container">
                    <label htmlFor="id_search_bar" className="h-hide-visually">
                      Search Movies
                    </label>
                    <input
                      type="search"
                      id="id_search_bar"
                      name="newSearch"
                      placeholder="Search movies"
                      onChange={this.handleChange}
                    />
                  </div>
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
              {isActive === true ? (
                <div className="c-movie-container">
                  <div className="c-movie__item">
                    <h3>{activeMovie.Title}</h3>
                    <p>{activeMovie.Genre}</p>
                    <p>{activeMovie.Plot}</p>
                    <p>
                      <strong>Language:</strong>
                      {activeMovie.Language}
                    </p>
                    <p>
                      <strong>Director:</strong>
                      {activeMovie.Director}
                    </p>
                    <p>
                      <strong>Actors:</strong>
                      {activeMovie.Actors}
                    </p>
                    <p>
                      <strong>Runtime:</strong>
                      {activeMovie.Runtime}
                    </p>
                  </div>
                  <div className="c-movie__item">
                    <img
                      className="c-image"
                      alt={activeMovie.Title}
                      src={activeMovie.Poster}
                    />
                  </div>
                </div>
              ) : null}
            </Container>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
