import React from "react";
import { useDispatch } from "react-redux";
import { setToast } from "../store/mainSlice";
import { toastTrigger } from "../helpers/helpers";
import Loading from "./Loading";

const Main = () => {
  const dispatch = useDispatch();

  const toast = {
    message: "Hello from Main",
    progressColor: "var(--primary-color)",
  };

  return (
    <>
      <h1>main</h1>
      <Loading></Loading>
    </>
  );
};

export default Main;
