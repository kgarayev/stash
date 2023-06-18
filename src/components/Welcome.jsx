import React from "react";
import Logo from "./Logo";
import Name from "./Name";
import "./styles/Welcome.css";
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
