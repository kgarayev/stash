// importing react, components and libraries
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setErrors, selectErrors } from "../store/mainSlice";
import Name from "./Name";

// importing mui stuff
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

// importing stylesheets
import logo from "../assets/logos/Logo7.svg";
import "../stylesheets/RegisterLogin.css";

const Template = (props) => {
  const dispatch = useDispatch();

  const { component } = props;

  const onClick = () => {
    dispatch(setErrors(null));
  };

  return (
    <>
      <div className="component">
        <div className="componentHeader" onClick={onClick}>
          <Link to="/" className="logoLink">
            <div className="componentLogoContainer">
              <div className="componentLogo">
                <img src={logo} alt="logo" className="logo" />
              </div>
              <Name></Name>
            </div>
          </Link>

          <div className="closeButton" onClick={onClick}>
            <Link to="/">
              <IconButton sx={{ color: "white", padding: "0.5rem" }}>
                <CloseIcon />
              </IconButton>
            </Link>
          </div>
        </div>

        <div className="subComponent">
          <div className="boxWrapper">
            <div className="componentBox">{component}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
