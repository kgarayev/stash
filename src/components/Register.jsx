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
  const onSubmit = () => console.log("form submitted");

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
                <Input label="first name" type="string"></Input>

                <Input label="last name" type="string"></Input>
              </div>
              <div className="registerNumber">
                <p>+44</p>
                <Input label="phone number" type="number"></Input>
              </div>
              <div className="registerEmail">
                <Input label="email" type="email"></Input>
              </div>
              <div className="registerDob">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateField
                    InputProps={{ sx: { borderRadius: "5rem" } }}
                    required
                    disableFuture
                    fullWidth
                    margin="dense"
                    maxDate={formattedDate}
                    label="date of birth"
                    format="DD/MM/YYYY"
                    size="small"
                  />
                </LocalizationProvider>
              </div>
              <div className="registerAddress">
                <div className="registerStreet">
                  <Input label="street address" type="string"></Input>
                </div>

                <div className="registerPostcode">
                  <Input label="town/city" type="string"></Input>

                  <Input label="postcode" type="string"></Input>
                </div>
              </div>
              <div className="registerPassword">
                <Input label="password" type="string"></Input>

                <Input label="confirm password" type="string"></Input>
              </div>
              <div className="registerAgreement">
                <Checkbox sx={{ padding: "0rem" }} />
                <p>I agree to stash's cookie and privacy policy</p>
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
