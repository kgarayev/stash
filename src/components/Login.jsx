// importing react, components and libraries
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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
import { toastTrigger } from "../helpers/helpers";

// importing stylesheets
import "../stylesheets/RegisterLogin.css";

// main login component

const Login = () => {
  const [input, setInput] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errors = useSelector(selectErrors);
  // const input = useSelector(selectLoginInput);
  let localErrors = null;

  const errorMessage = {
    message: "incorrect email or password",
    progressColor: "#c90909",
  };

  const onInput = async (e) => {
    const result = { ...input, [e.target.name]: e.target.value };

    // validate
    localErrors = await validate(result, "login");

    dispatch(setErrors(localErrors));
    setInput(result);
    // dispatch(setLoginInput(result));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (errors) {
      // we can display some toast error here
      console.log("Form NOT submitted.");
      toastTrigger(errorMessage);
      return;
    }

    if (input.email === "" || input.password === "") {
      // we can display some toast error here
      console.log("Form NOT submitted.");
      toastTrigger(errorMessage);
      return;
    }

    // we can display some success toast here
    console.log("Form submitted.");

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const loginJson = Object.fromEntries(formData.entries());

    // dispatch(setLoginInput(loginJson));

    try {
      const { data } = await axios.post("http://localhost:6001/user/login", {
        ...loginJson,
      });

      console.log(data);

      if (data.status === 1) {
        toastTrigger({
          message: "login successful",
          progressColor: "#007b60",
        });

        // Change the route to "/main"
        navigate("/main");

        return;
      } else {
        console.log(data.reason);

        toastTrigger({
          message: "incorrect email or password",
          progressColor: "#c90909",
        });
        return;
      }
    } catch (error) {
      console.log(error);

      toastTrigger({
        message: "something has gone wrong",
        progressColor: "#c90909",
      });
    }
  };

  return (
    <>
      <div className="componentBoxHeader">
        <h1>Log In</h1>
        <p>enter your credentials</p>

        <div className="altRoute">
          <Link to="/register">
            <h2 className="altRouteText">or register</h2>
          </Link>
        </div>
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

        <div className="resetLink">
          <Link to="/reset">
            <h2 className="altRouteText">forgotten password?</h2>
          </Link>
        </div>

        <div className="registerButton">
          <Button text="login" type="submit" />
        </div>
      </form>
    </>
  );
};

export default Login;
