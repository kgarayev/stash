import React, { useEffect, useState } from "react";
import Name from "./Name";
import Logo from "./Logo";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateField } from "@mui/x-date-pickers/DateField";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
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
          <div className="componentLogoContainer">
            <div className="componentLogo">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <Name></Name>
          </div>

          <div>
            <IconButton sx={{ color: "white", padding: "0.75rem" }}>
              <CloseIcon />
            </IconButton>
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
                type="string"
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
              <Checkbox />
              <p>I agree to Stash's Cookie and Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
