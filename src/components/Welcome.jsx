import React from "react";
import { Link } from "react-router-dom";

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

        <Link to="/register">
          <button className="button">register</button>
        </Link>
        <Link to="/login">
          <button className="button">login</button>
        </Link>
      </div>
    </>
  );
};

export default Welcome;
