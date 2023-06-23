// importing react, components and libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Name from "./Name";
import Button from "./Button";
import Input from "./Input";
import { validate } from "../validation";
import { useSelector, useDispatch } from "react-redux";
import {
  setLoginInput,
  setErrors,
  selectLoginInput,
  selectErrors,
} from "../store/mainSlice";

// importing mui stuff
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

// importing stylesheets
import logo from "../assets/logos/Logo7.svg";
import "../stylesheets/RegisterLogin.css";

const Login = () => {
  const dispatch = useDispatch();

  const errors = useSelector(selectErrors);
  const input = useSelector(selectLoginInput);

  let localErrors = null;

  const onInput = async (e) => {
    const result = { ...input, [e.target.name]: e.target.value };

    // validate
    localErrors = await validate(result, "login");

    dispatch(setErrors(localErrors));
    dispatch(setLoginInput(result));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (errors) {
      // we can display some toast error here
      console.log("Form NOT submitted.");
      return;
    }

    if (input.email === "" || input.password === "") {
      // we can display some toast error here
      console.log("Form NOT submitted.");
      return;
    }

    // we can display some success toast here
    console.log("Form submitted.");

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const loginJson = Object.fromEntries(formData.entries());

    console.log(loginJson);
    dispatch(setLoginInput(loginJson));
  };

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
              <div className="componentBoxHeader">
                <h1>Log In</h1>
                <p>enter your credentials</p>
              </div>

              <form onSubmit={onSubmit}>
                <div className="registerEmail inputContainer">
                  <Input
                    label="email *"
                    type="string"
                    name="email"
                    placeholder="rick@sanchez.com"
                    onInput={onInput}
                  ></Input>
                  <p className="errorMessage">{errors && errors.email}</p>
                </div>

                <div className="registerPassword">
                  <div className="inputContainer">
                    <Input
                      label="password *"
                      type="password"
                      name="password"
                      onInput={onInput}
                    ></Input>
                    <p className="errorMessage">{errors && errors.password}</p>
                  </div>
                </div>

                <div className="registerButton">
                  <Button text="login" type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
