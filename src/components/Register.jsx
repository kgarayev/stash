// importing react, components and libraries
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { toastTrigger } from "../helpers/helpers";
import { validate } from "../validation";
import { useSelector, useDispatch } from "react-redux";
import {
  setRegisterInput,
  setErrors,
  selectRegisterInput,
  selectErrors,
  setScreenMode,
  selectScreenMode,
} from "../store/mainSlice";

// importing stylesheets
import "../stylesheets/RegisterLogin.css";
import StatusUpdate from "./StatusUpdate";

// register component

const Register = () => {
  const [input, setInput] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errors = useSelector(selectErrors);
  // const input = useSelector(selectRegisterInput);
  const screenMode = useSelector(selectScreenMode);

  const errorMessage = {
    message: "ensure data is entered correctly",
    progressColor: "#c90909",
  };

  // console.log(screenMode);

  let localErrors = null;

  const onInput = async (e) => {
    const result = { ...input, [e.target.name]: e.target.value };

    // validate
    localErrors = await validate(result, "register");

    // delete result.password;
    // delete result.confirmPassword;

    dispatch(setErrors(localErrors));
    setInput(result);
    // dispatch(setRegisterInput(result));
  };

  const onSubmit = async (e) => {
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

    // Or you can work with it as a plain object:
    // const registerJsonString = JSON.stringify(registerJson);

    delete registerJson.confirmPassword;
    console.log(registerJson);
    // dispatch(setRegisterInput(registerJson));

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_LINK}user/register`,
        {
          ...registerJson,
        }
      );

      console.log(data);

      if (data.status === 1) {
        dispatch(setScreenMode(1));
        console.log(screenMode);

        setTimeout(() => {
          navigate("/main");
        }, 1500);

        return;
      } else {
        console.log(data);

        // if (data.reason.toLowerCase().includes("duplicate")) {
        //   toastTrigger({
        //     message: "email or phone number already registered",
        //     progressColor: "#c90909",
        //   });
        //   return;
        // }

        toastTrigger(errorMessage);

        return;
      }
    } catch (error) {
      console.log(error);
      toastTrigger({
        message: "something has gone wrong",
        progressColor: "#c90909",
      });
      return;
    }
  };

  return (
    <>
      <div className="componentBoxHeader">
        <h1>Register</h1>
        <p>let's sign up first</p>

        <div className="altRoute">
          <Link to="/login">
            <h2 className="altRouteText">or log In</h2>
          </Link>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <div className="registerNames">
          <div className="inputContainer">
            <Input
              label="first name *"
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
              label="last name *"
              type="string"
              name="lastName"
              placeholder="Sanchez"
              onInput={onInput}
            ></Input>
            <p className="errorMessage">{errors && errors.lastName}</p>
          </div>
        </div>

        <div className="registerNumber inputContainer">
          <Input
            label="phone number *"
            type="string"
            name="number"
            placeholder="07123456789"
            onInput={onInput}
          ></Input>
          <p className="errorMessage">{errors && errors.number}</p>
        </div>

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

        <div className="registerDob inputContainer">
          <Input
            label="date of birth *"
            type="string"
            name="dob"
            placeholder="dd/mm/yyyy"
            onInput={onInput}
          ></Input>

          <p className="errorMessage">{errors && errors.dob}</p>
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

          <div className="inputContainer">
            <Input
              label="confirm password *"
              type="password"
              name="confirmPassword"
              onInput={onInput}
            ></Input>
            <p className="errorMessage">{errors && errors.confirmPassword}</p>
          </div>
        </div>

        <div className="registerButton">
          <div className="registerAgreement">
            <p>by clicking "register" I agree to stash's privacy policy</p>
          </div>
          <Button text="register" type="submit" />
        </div>
      </form>
    </>
  );
};

export default Register;
