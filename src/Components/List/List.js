import React from "react";
import "./List.css";
import ListItem from "./ListItem";

const List = ({ arr, isOrdered, onClick, active }) => {
  const Tag = isOrdered ? "ol" : "ul";
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
