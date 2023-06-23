// importing react, components and libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Name from "./Name";
import Button from "./Button";
import Input from "./Input";
import { validate } from "../validation";

// importing mui stuff
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";

// importing stylesheets
import logo from "../assets/logos/Logo7.svg";
import "../stylesheets/RegisterLogin.css";

const Register = () => {
  // local state - to be changed to redux tookit
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const onInput = async (e) => {
    const result = { ...input, [e.target.name]: e.target.value };
    console.log(e.target.value);

    // validate
    setErrors(await validate(result, "register"));

    setInput(result);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  };

  // making sure there is a limit on the age
  const currentDate = new Date();
  const year = currentDate.getFullYear() - 18;
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  const formattedDate = `${day}/${month}/${year}`;

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
                    <p className="errorMessage">{errors.firstName}</p>
                  </div>

                  <div>
                    <Input
                      label="last name"
                      type="string"
                      name="lastName"
                      placeholder="07123456789"
                      onInput={onInput}
                    ></Input>
                    <p className="errorMessage">{errors.lastName}</p>
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
                  <p className="errorMessage">{errors.number}</p>
                </div>

                <div className="registerEmail inputContainer">
                  <Input
                    label="email"
                    type="email"
                    name="email"
                    placeholder="rick@sanchez.com"
                    onInput={onInput}
                  ></Input>
                  <p className="errorMessage">{errors.email}</p>
                </div>

                <div className="registerDob inputContainer">
                  <Input
                    label="date of birth"
                    type="string"
                    name="dob"
                    placeholder="dd/mm/yyyy"
                    onInput={onInput}
                  ></Input>

                  <p className="errorMessage">{errors.dob}</p>
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
                    <p className="errorMessage">{errors.password}</p>
                  </div>

                  <div className="inputContainer">
                    <Input
                      label="confirm password"
                      type="string"
                      name="repeatPassword"
                      onInput={onInput}
                    ></Input>
                    <p className="errorMessage">{errors.confirmPassword}</p>
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
