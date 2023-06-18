import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

import "./styles/Welcome.css";
import Logo from "./Logo";
import Name from "./Name";
import Button from "@mui/material/Button";

const Welcome = () => {
  return (
    <>
      <div className="welcomeContainer">
        <Name></Name>
        <Logo></Logo>

        <button className="button">register</button>
        <button className="button">login</button>
      </div>
    </>
  );
};

export default Welcome;
