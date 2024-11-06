import React from "react";

function FormInput(props) {
  return (
    <input
      className="form-input"
      onChange={props.changing}
      value={props.value}
      required={props.required}
      placeholder={props.placeholder}
      name={props.name}
    />
  );
}

export default FormInput;
