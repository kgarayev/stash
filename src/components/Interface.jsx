import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Register from "./Register";
import Login from "./Login";
import Error404 from "./Error404";
import LandingTemplate from "./LandingTemplate";

const Interface = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Interface;
