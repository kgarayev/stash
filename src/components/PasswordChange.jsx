import React, { useState } from "react";
import "../stylesheets/RegisterLogin.css";
import "../stylesheets/Home.css";
import "../stylesheets/AltTemplate.css";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
import PasswordContent from "./PasswordContent";

const PasswordChange = () => {
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

  return (
    <Accordion sx={{ backgroundColor: "white" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel2a-header"
        sx={{ borderRadius: "10rem" }}
      >
        <div className="accordionTitle">
          <HttpsOutlinedIcon />
          <h3>change password</h3>
        </div>
      </AccordionSummary>

      <PasswordContent></PasswordContent>
    </Accordion>
  );
};

export default PasswordChange;
