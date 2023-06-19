import React from "react";
import "../stylesheets/Button.css";

const Button = (props) => {
  const { text, type } = props;

  return (
    <button className="button" type={type}>
      {text}
    </button>
  );
};

export default Button;
