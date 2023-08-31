import React from "react";
import "../stylesheets/Button.css";

// custom button components

const Button = (props) => {
  const { text, type, textSize, onClick, id } = props;

  return (
    <button
      className={`button ${type}`}
      style={{ fontSize: textSize }}
      onClick={onClick}
      id={id}
    >
      {text}
    </button>
  );
};

export default Button;
