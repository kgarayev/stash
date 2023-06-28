import React from "react";
import "../stylesheets/Button.css";
import { useDispatch } from "react-redux";
import { setScreenMode } from "../store/mainSlice";

const Button = (props) => {
  const { text, type } = props;
  const dispatch = useDispatch();

  return (
    <button
      className={`button ` + type}
      onClick={() => {
        dispatch(setScreenMode(0));
      }}
    >
      {text}
    </button>
  );
};

export default Button;
