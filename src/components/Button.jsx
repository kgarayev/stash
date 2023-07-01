import React from "react";
import "../stylesheets/Button.css";
import { useDispatch } from "react-redux";
import { setScreenMode } from "../store/mainSlice";

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
