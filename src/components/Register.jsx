// importing react, components and libraries
import React from "react";
import { Link } from "react-router-dom";
import Name from "./Name";
import Button from "./Button";
import Input from "./Input";

// importing mui stuff
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

// importing stylesheets
import logo from "../assets/logos/Logo7.svg";
import "../stylesheets/Register.css";

const Register = () => {
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
          <Link to="/">
            <div className="componentLogoContainer">
              <div className="componentLogo">
                <img src={logo} alt="logo" className="logo" />
              </div>
              <Name></Name>
            </div>
          </Link>

          <div>
            <Link to="/">
              <IconButton sx={{ color: "white", padding: "0.75rem" }}>
                <CloseIcon />
              </IconButton>
            </Link>
          </div>
        </div>

        <div className="boxWrapper">
          <div className="componentBox">
            <div className="componentBoxHeader">
              <h1>Register</h1>
              <p>let's sign up first</p>
            </div>

            <form onSubmit={onSubmit}>
              <div className="registerNames">
                <Input
                  label="first name"
                  type="string"
                  autoFocus={true}
                  name="firstName"
                ></Input>

                <Input label="last name" type="string" name="lastName"></Input>
              </div>

              <div className="registerNumber">
                <Input label="phone number" type="number" name="number"></Input>
              </div>

              <div className="registerEmail">
                <Input label="email" type="email" name="email"></Input>
              </div>

              <div className="registerDob">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateField
                    InputProps={{ sx: { borderRadius: "1rem" } }}
                    required
                    disableFuture
                    fullWidth
                    margin="dense"
                    maxDate={formattedDate}
                    label="date of birth"
                    format="DD/MM/YYYY"
                    size="small"
                    name="dob"
                  />
                </LocalizationProvider>
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
                <Input label="password" type="string" name="password"></Input>

                <Input
                  label="confirm password"
                  type="string"
                  name="repeatPassword"
                ></Input>
              </div>

              <div className="registerAgreement">
                {/* <Checkbox sx={{ padding: "0rem" }} name="checkbox" /> */}
                <p>
                  By clicking "register" I agree to stash's cookie and privacy
                  policy
                </p>
              </div>

              <div className="registerButton">
                <Button text="register" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
