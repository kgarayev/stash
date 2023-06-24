import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Register from "./Register";
import Login from "./Login";
import Error404 from "./Error404";
import Template from "./Template";
import Success from "./Success";

const Interface = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/register" element={<Template component={<Register />} />} />
      <Route path="/login" element={<Template component={<Login />} />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Interface;
