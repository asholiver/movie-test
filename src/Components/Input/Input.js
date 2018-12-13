import React from "react";

const Input = ({
  name,
  type,
  value,
  onChange,
  placeholder,
  classes
}) => {

  return (
    <input
    id={`id_${name}`}
    className={classes}
    type={type == null ? "hidden" : type}
    name={name}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
    />

  );
};

export default Input;





