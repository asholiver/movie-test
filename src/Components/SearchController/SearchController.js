import React from "react";
import "./SearchController.css";
import { Fieldset, Form } from "./../../elements";
import { TextField } from "..";

const SearchController = ({ onSubmit, onClick }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Fieldset legendText="Search movies" isHidden={true}>
        <TextField
          label="Search movies"
          isLabelHidden={true}
          type="search"
          name="newSearch"
          onChange={onClick}
          placeholder="Search movies"
        />
      </Fieldset>
    </Form>
  );
};

export default SearchController;
