import React from "react";
import "./List.css";
import { EmptyElement, Loader, ListItem } from "..";

const List = ({ arr, isOrdered, onClick, active, isLoading, errorMessage }) => {
  const Tag = isOrdered ? "ol" : "ul";
  if (isLoading) return <Loader />;
  if (errorMessage) return <EmptyElement text={errorMessage} />;
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
