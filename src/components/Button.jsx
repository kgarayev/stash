import React from "react";
import "../stylesheets/Button.css";

const Button = (props) => {
  const { type } = props;

  return <button className="button">{type}</button>;
};

export default Button;
