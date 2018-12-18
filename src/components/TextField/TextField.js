import React from "react";
import "./TextField.css";
import { Label } from "..";
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
    <div className={getClasses}>
      <Label name={name} text={label} isLabelHidden={isLabelHidden} />
      <input
        className="c-form-field__input"
        id={name}
        type={type == null ? "text" : type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
