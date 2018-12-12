import React from "react";
import "./SearchController.css";
import TextField from "./../TextField";

const SearchController = ({ onSubmit, onClick }) => {
  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend className="h-hide-visually">Search movies</legend>
        <TextField
          label="Search movies"
          isLabelHidden={true}
          type="search"
          name="newSearch"
          onChange={onClick}
          placeholder="Search movies"
        />
      </fieldset>
    </form>
  );
};

export default SearchController;
