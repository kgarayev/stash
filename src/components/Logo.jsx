import React from "react";
// import logo from "../assets/logos/gifs/Good_Gif.gif";
// import logo from "../assets/logos/Logo4.png";
// import logo from "../assets/logos/Logo5.svg";
// import logo from "../assets/logos/Logo7.svg";
import logo from "../assets/logos/Logo6.svg";

import "./styles/Logo.css";

const Logo = () => {
  return (
    <div className="logoContainer">
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
};

export default Logo;
