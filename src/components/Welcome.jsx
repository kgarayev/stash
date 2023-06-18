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

        <button className="buttonOne">register</button>
        <button className="buttonOne">login</button>
      </div>
    </>
  );
};

export default Welcome;
