import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Register from "./Register";
import Login from "./Login";
import Error404 from "./Error404";
import Template from "./Template";
import Success from "./Success";
import MainTemplate from "./MainTemplate";
import Home from "./Home";
import { useSelector } from "react-redux";
import { selectScreenMode } from "../store/mainSlice";

// main interface component
const Interface = () => {
  const screenMode = useSelector(selectScreenMode);

  // selecting what to show depending on the screen mode
  let registerComponent = <Register />;
  let mainComponent = <Home />;

  switch (screenMode) {
    case 0:
      registerComponent = <Register />;
      break;

    case 1:
      registerComponent = <Success />;
      break;

    case 2:
      mainComponent = <Home />;

    default:
      break;
  }

  return (
    // various routes
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route
        path="/register"
        element={<Template component={registerComponent} />}
      />
      <Route path="/login" element={<Template component={<Login />} />} />
      <Route path="/success" element={<Template component={<Success />} />} />
      <Route
        path="/main"
        element={<MainTemplate component={mainComponent} />}
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Interface;
