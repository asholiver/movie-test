import React from "react";
import "./List.css";
import ListItem from "./ListItem";
import Loader from "./../Loader";

const List = ({ arr, isOrdered, onClick, active, isLoading, errorMessage }) => {
  const Tag = isOrdered ? "ol" : "ul";
  if (isLoading) return <Loader />;
  if (errorMessage) return <p>{errorMessage}</p>;
  return (
    <Tag className="c-list">
      {arr.map((item, index) => (
        <ListItem
          key={index}
          onClick={onClick}
          title={item.Title}
          year={item.Year}
          value={item.imdbID}
          isActive={active === item.imdbID}
        />
      ))}
    </Tag>
  );
};

export default List;
