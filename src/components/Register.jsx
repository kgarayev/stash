// importing react, components and libraries
import React from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Name from "./Name";
import Button from "./Button";

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
  const currentDate = new Date();
  const year = currentDate.getFullYear() - 18;
  const month = currentDate.getMonth() + 1; // Adding 1 to adjust month index (0-11 to 1-12)
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
              <p>Let's Sign Up first</p>
            </div>

            <div className="registerNames">
              <TextField
                required
                autoFocus
                fullWidth
                label="First Name"
                margin="dense"
                type="string"
                size="small"
              />
              <TextField
                required
                fullWidth
                label="Last Name"
                margin="dense"
                type="string"
                size="small"
              />
            </div>

            <div className="registerNumber">
              <p>+44</p>
              <TextField
                fullWidth
                required
                label="Phone Number"
                margin="dense"
                type="number"
                size="small"
              />
            </div>

            <div className="registerEmail">
              <TextField
                fullWidth
                required
                label="Email"
                margin="dense"
                type="string"
                size="small"
              />
            </div>

            <div className="registerDob">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateField
                  required
                  disableFuture
                  fullWidth
                  margin="dense"
                  maxDate={formattedDate}
                  label="Date of Birth"
                  format="DD/MM/YYYY"
                  size="small"
                />
              </LocalizationProvider>
            </div>

            <div className="registerAddress">
              <div className="registerStreet">
                <TextField
                  fullWidth
                  required
                  label="Street Address"
                  margin="dense"
                  type="string"
                  size="small"
                />
              </div>
              <div className="registerPostcode">
                <TextField
                  fullWidth
                  required
                  label="Town/City"
                  margin="dense"
                  type="string"
                  size="small"
                />

                <TextField
                  fullWidth
                  required
                  label="Postcode"
                  margin="dense"
                  type="string"
                  size="small"
                />
              </div>
            </div>
            <div className="registerPassword">
              <TextField
                fullWidth
                required
                label="Password"
                margin="dense"
                type="string"
                size="small"
              />

              <TextField
                fullWidth
                required
                label="Confirm Password"
                margin="dense"
                type="string"
                size="small"
              />
            </div>

            <div className="registerAgreement">
              <Checkbox sx={{ padding: "0rem" }} />
              <p>I agree to Stash's Cookie and Privacy Policy</p>
            </div>

            <div className="registerButton">
              <Button type="register" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
