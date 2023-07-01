import React, { useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import StatusUpdate from "./StatusUpdate";
import "../stylesheets/RegisterLogin.css";
import { toastTrigger } from "../helpers/helpers";
import { validate } from "../validation";
import { useSelector, useDispatch } from "react-redux";
import {
  setErrors,
  selectRegisterInput,
  selectErrors,
  selectAccount,
  setTransactions,
  selectPayInput,
  setPayInput,
  setBalance,
} from "../store/mainSlice";

// importing stylesheets
import "../stylesheets/RegisterLogin.css";

const Pay = () => {
  const [localScreenMode, setLocalScreenMode] = useState(0);

  const dispatch = useDispatch();
  const errors = useSelector(selectErrors);
  const payInput = useSelector(selectPayInput);
  const accountBalance = useSelector(selectAccount).balance;

  const errorMessage = {
    message: "ensure the entered data is correct",
    progressColor: "red",
  };

  let amountCheck;

  if (accountBalance - payInput.paymentAmount < 0) {
    amountCheck = "amount exceeds balance";
  } else {
    amountCheck = "";
  }

  let localErrors = null;

  const onInput = async (e) => {
    const result = { ...payInput, [e.target.name]: e.target.value };

    // validate
    localErrors = await validate(result, "pay");

    dispatch(setErrors(localErrors));
    dispatch(setPayInput(result));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (errors) {
      console.log("Form NOT submitted.");
      toastTrigger(errorMessage);
      return;
    }

    for (let key in payInput) {
      if (payInput[key] === "") {
        console.log("Form NOT submitted.");
        toastTrigger(errorMessage);
        return;
      }
    }

    if (amountCheck !== "") {
      console.log("Form NOT submitted.");
      toastTrigger(errorMessage);
      return;
    }

    console.log("Form submitted.");

    // Read the form data
    const form = e.target;

    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const registerJson = Object.fromEntries(formData.entries());

    dispatch(setPayInput(registerJson));
    dispatch(setBalance(accountBalance - registerJson.paymentAmount));
    dispatch(
      setTransactions({
        type: "sent",
        details: registerJson.payeeName,
        date: "today",
        amount: registerJson.paymentAmount,
      })
    );

    setLocalScreenMode(1);

    setTimeout(() => {
      setLocalScreenMode(0);
    }, 1500);
  };

  if (localScreenMode === 0) {
    return (
      <>
        <div>
          <form onSubmit={onSubmit}>
            <div className="inputContainer">
              <Input
                label="payee name *"
                type="string"
                name="payeeName"
                placeholder="full name of the person or company"
                onInput={onInput}
              ></Input>
              <p className="errorMessage">{errors && errors.payeeName}</p>
            </div>

            <div className="inputContainer">
              <Input
                label="sort code *"
                type="string"
                name="sortCode"
                placeholder="12-34-56"
                onInput={onInput}
              ></Input>
              <p className="errorMessage">{errors && errors.sortCode}</p>
            </div>

            <div className="inputContainer">
              <Input
                label="account number *"
                type="string"
                name="accountNumber"
                placeholder="12345678"
                onInput={onInput}
              ></Input>
              <p className="errorMessage">{errors && errors.accountNumber}</p>
            </div>

            <div className="inputContainer">
              <Input
                label="amount *"
                type="string"
                name="paymentAmount"
                placeholder="£99.99"
                onInput={onInput}
              ></Input>
              <p className="errorMessage">
                {errors && errors.paymentAmount}
                {amountCheck}
              </p>
            </div>

            <div className="payButton">
              <Button text="pay" type="submit" />
            </div>
          </form>
        </div>
      </>
    );
  } else if (localScreenMode === 1) {
    return <StatusUpdate message={"payment sent"} />;
  }
};

export default Pay;
