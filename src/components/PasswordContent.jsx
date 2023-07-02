import React, { useState } from "react";
import "../stylesheets/RegisterLogin.css";
import "../stylesheets/Home.css";
import "../stylesheets/AltTemplate.css";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Button from "./Button";
import Input from "./Input";
import { toastTrigger } from "../helpers/helpers";
import { validate } from "../validation";
import { useSelector, useDispatch } from "react-redux";
import {
  setRegisterInput,
  setErrors,
  selectErrors,
  changePassword,
  selectPasswordChange,
} from "../store/mainSlice";
import StatusUpdate from "./StatusUpdate";

const PasswordContent = () => {
  const [localScreenMode, setLocalScreenMode] = useState(0);

  const dispatch = useDispatch();
  const errors = useSelector(selectErrors);
  const input = useSelector(selectPasswordChange);

  const errorMessage = {
    message: "ensure data is entered correctly",
    progressColor: "red",
  };

  let localErrors = null;

  const onInput = async (e) => {
    const result = { ...input, [e.target.name]: e.target.value };

    // validate
    localErrors = await validate(result, "passwordChange");

    dispatch(setErrors(localErrors));
    dispatch(changePassword(result));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (errors) {
      // we can display some toast error here
      console.log("Form NOT submitted.");
      toastTrigger(errorMessage);
      return;
    }

    for (let key in input) {
      if (input[key] === "") {
        console.log("Form NOT submitted.");
        toastTrigger(errorMessage);
        return;
      }
    }

    // we can display some success toast here
    console.log("Form submitted.");

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const registerJson = Object.fromEntries(formData.entries());

    dispatch(setRegisterInput(registerJson));

    setLocalScreenMode(1);

    setTimeout(() => {
      setLocalScreenMode(0);
    }, 1500);
  };

  if (localScreenMode === 0) {
    return (
      <AccordionDetails>
        <div className="accordionBody">
          <form onSubmit={onSubmit}>
            <div>
              <Input
                label="current password *"
                type="password"
                name="currentPassword"
                onInput={onInput}
              />
              <p className="errorMessage">{errors && errors.currentPassword}</p>
              <p></p>
            </div>

            <div>
              <Input
                label="new password *"
                type="password"
                name="newPassword"
                onInput={onInput}
              />
              <p className="errorMessage">{errors && errors.newPassword}</p>
              <p></p>
            </div>

            <div>
              <Input
                label="repeat new password *"
                type="password"
                name="confirmNewPassword"
                onInput={onInput}
              />
              <p className="errorMessage">
                {errors && errors.confirmNewPassword}
              </p>
              <p></p>
            </div>

            <div className="notificationsButton">
              <Button text="save changes" type="submit" textSize="1.2rem" />
            </div>
          </form>
        </div>
      </AccordionDetails>
    );
  } else {
    return (
      <>
        <div>
          <div className="empty"></div>
          <StatusUpdate message={"password changed"} />;
        </div>
      </>
    );
  }
};

export default PasswordContent;
