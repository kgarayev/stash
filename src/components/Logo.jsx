import React from "react";
import logo from "../assets/logos/Logo6.svg";
// import logo from "../assets/logos/gifs/Good_Gif.gif";
// import logo from "../assets/logos/Logo4.png";
// import logo from "../assets/logos/Logo5.svg";
// import logo from "../assets/logos/Logo7.svg";
// import logo from "../assets/logos/Logo8.png";

import "../stylesheets/Logo.css";

// renders logo

const Logo = () => {
  return (
    <div className="logoContainer">
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
};

export default Logo;
