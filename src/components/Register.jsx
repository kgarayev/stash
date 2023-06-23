// importing react, components and libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Name from "./Name";
import Button from "./Button";
import Input from "./Input";
import { validate } from "../validation";
import { useSelector, useDispatch } from "react-redux";
import {
  setRegisterInput,
  setErrors,
  selectRegisterInput,
  selectErrors,
} from "../store/mainSlice";

// importing mui stuff
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

// importing stylesheets
import logo from "../assets/logos/Logo7.svg";
import "../stylesheets/RegisterLogin.css";

const Register = () => {
  const dispatch = useDispatch();

  const errors = useSelector(selectErrors);
  const input = useSelector(selectRegisterInput);

  let localErrors = null;

  const onInput = async (e) => {
    const result = { ...input, [e.target.name]: e.target.value };

    // validate
    localErrors = await validate(result, "register");

    dispatch(setErrors(localErrors));
    dispatch(setRegisterInput(result));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (errors) {
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
    const registerJson = Object.fromEntries(formData.entries());

    console.log(registerJson);
    dispatch(setRegisterInput(registerJson));
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
                <h1>Register</h1>
                <p>let's sign up first</p>
              </div>

              <form onSubmit={onSubmit}>
                <div className="registerNames">
                  <div className="inputContainer">
                    <Input
                      label="first name"
                      type="string"
                      autoFocus={true}
                      name="firstName"
                      placeholder="Rick"
                      onInput={onInput}
                    ></Input>
                    <p className="errorMessage">{errors && errors.firstName}</p>
                  </div>

                  <div className="inputContainer">
                    <Input
                      label="last name"
                      type="string"
                      name="lastName"
                      placeholder="07123456789"
                      onInput={onInput}
                    ></Input>
                    <p className="errorMessage">{errors && errors.lastName}</p>
                  </div>
                </div>

                <div className="registerNumber inputContainer">
                  <Input
                    label="phone number"
                    type="string"
                    name="number"
                    placeholder="07123456789"
                    onInput={onInput}
                  ></Input>
                  <p className="errorMessage">{errors && errors.number}</p>
                </div>

                <div className="registerEmail inputContainer">
                  <Input
                    label="email"
                    type="email"
                    name="email"
                    placeholder="rick@sanchez.com"
                    onInput={onInput}
                  ></Input>
                  <p className="errorMessage">{errors && errors.email}</p>
                </div>

                <div className="registerDob inputContainer">
                  <Input
                    label="date of birth"
                    type="string"
                    name="dob"
                    placeholder="dd/mm/yyyy"
                    onInput={onInput}
                  ></Input>

                  <p className="errorMessage">{errors && errors.dob}</p>
                </div>

                {/* <div className="registerAddress">
                <div className="registerStreet">
                  <Input
                    label="street address"
                    type="string"
                    name="street"
                  ></Input>
                </div>

                <div className="registerPostcode">
                  <Input label="town/city" type="string" name="city"></Input>

                  <Input label="postcode" type="string" name="postcode"></Input>
                </div>
              </div> */}

                <div className="registerPassword">
                  <div className="inputContainer">
                    <Input
                      label="password"
                      type="string"
                      name="password"
                      onInput={onInput}
                    ></Input>
                    <p className="errorMessage">{errors && errors.password}</p>
                  </div>

                  <div className="inputContainer">
                    <Input
                      label="confirm password"
                      type="string"
                      name="confirmPassword"
                      onInput={onInput}
                    ></Input>
                    <p className="errorMessage">
                      {errors && errors.confirmPassword}
                    </p>
                  </div>
                </div>

                <div className="registerButton">
                  <div className="registerAgreement">
                    <p>
                      by clicking "register" I agree to stash's privacy policy
                    </p>
                  </div>
                  <Button text="register" type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
