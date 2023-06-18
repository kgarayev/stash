import React from "react";
// import logo from "../assets/logos/gifs/Good_Gif.gif";
import logo from "../assets/logos/Logo1.svg";
import "./styles/Logo.css";

const Logo = () => {
  return (
    <div className="logoContainer">
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
};

export default Logo;