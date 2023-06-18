import React from "react";
import { Link } from "react-router-dom";

import "../stylesheets/Welcome.css";
import Logo from "./Logo";
import Name from "./Name";

const Welcome = () => {
  return (
    <>
      <div className="welcomeContainer">
        <div className="welcomeName">
          <Name></Name>
        </div>

        <div className="welcomeLogo">
          <Logo></Logo>
        </div>

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
