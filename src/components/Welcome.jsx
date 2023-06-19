import React from "react";
import { Link } from "react-router-dom";

import "../stylesheets/Welcome.css";
import Logo from "./Logo";
import Name from "./Name";
import Button from "./Button";

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
          <Button type={"register"} />
        </Link>

        <Link to="/login">
          <Button type={"login"} />
        </Link>
      </div>
    </>
  );
};

export default Welcome;
