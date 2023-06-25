import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Register from "./Register";
import Login from "./Login";
import Error404 from "./Error404";
import Template from "./Template";
import Success from "./Success";
import MainTemplate from "./MainTemplate";
import Home from "./Home";
import { useSelector, useDispatch } from "react-redux";
import { setScreenMode, selectScreenMode } from "../store/mainSlice";

const Interface = () => {
  const dispatch = useDispatch();
  const screenMode = useSelector(selectScreenMode);
  // const registerComponent = screenMode === 0 ? <Register /> : <Success />;

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/register" element={<Template component={<Register />} />} />
      <Route path="/login" element={<Template component={<Login />} />} />
      <Route path="/success" element={<Template component={<Success />} />} />
      <Route path="/main" element={<MainTemplate component={<Home />} />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Interface;
