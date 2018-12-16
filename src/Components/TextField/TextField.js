import React from "react";
import "./TextField.css";
import { Div, Input, Label } from "./../../Elements";
import classNames from "classnames";

const TextField = ({
  label,
  name,
  type,
  value,
  isInvalid,
  onChange,
  placeholder,
  isLabelHidden
}) => {
  const getClasses = classNames({
    "c-form-field": true,
    "is-invalid": isInvalid
  });
  return (
    <Div className={getClasses}>
      <Label name={name} text={label} isLabelHidden={isLabelHidden} />
      <Input
        classes="c-form-field__input"
        id={name}
        type={type == null ? "text" : type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </Div>
  );
};

export default TextField;
