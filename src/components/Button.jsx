import React from "react";
import "../stylesheets/Button.css";
import { useSelector, useDispatch } from "react-redux";
import { setScreenMode, selectScreenMode } from "../store/mainSlice";

const Button = (props) => {
  const dispatch = useDispatch();
  const { text, type, mode } = props;

  const onClick = () => {
    dispatch(setScreenMode(mode));
  };

  return (
    <button className={`button ` + type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
