import React from "react";
import { useDispatch } from "react-redux";
import { setToast } from "../store/mainSlice";
import { toastTrigger } from "../helpers/helpers";

const Main = () => {
  const dispatch = useDispatch();

  const toast = {
    message: "Hello from Main",
    progressColor: "var(--primary-color)",
  };

  return (
    <>
      <h1>main</h1>
      <button
        onClick={() => {
          toastTrigger(toast);
        }}
      >
        click me
      </button>
    </>
  );
};

export default Main;
