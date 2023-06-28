import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Success = () => {
  return (
    <>
      <div className="statusContainer">
        <h1 className="statusMessage">registration success</h1>
        <div className="statusLogo">
          <Logo></Logo>
        </div>
      </div>
    </>
  );
};

export default Success;
