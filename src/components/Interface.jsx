import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Register from "./Register";
import Login from "./Login";

const Interface = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Interface;
