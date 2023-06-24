// importing react, components and libraries
import React, { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Name from "./Name";

// importing mui stuff
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

// importing stylesheets
import logo from "../assets/logos/Logo7.svg";
import "../stylesheets/RegisterLogin.css";
import Register from "./Register";
import Login from "./Login";

const LandingTemplate = () => {
  const location = useLocation();

  return (
    <>
      <div className="component">
        <div className="componentHeader">
          <Link to="/" className="logoLink">
            <div className="componentLogoContainer">
              <div className="componentLogo">
                <img src={logo} alt="logo" className="logo" />
              </div>
              <Name></Name>
            </div>
          </Link>

          <div className="closeButton">
            <Link to="/">
              <IconButton sx={{ color: "white", padding: "0.5rem" }}>
                <CloseIcon />
              </IconButton>
            </Link>
          </div>
        </div>

        <div className="subComponent">
          <div className="boxWrapper">
            <div className="componentBox">
              <Routes>
                <Route
                  path="/register"
                  element={
                    location.pathname === "/register" ? <Register /> : <Login />
                  }
                />
                <Route
                  path="/login"
                  element={
                    location.pathname === "/login" ? <Login /> : <Register />
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingTemplate;
