import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import StatusUpdate from "./StatusUpdate";
import "../stylesheets/RegisterLogin.css";
import { toastTrigger } from "../helpers/helpers";
import { validate } from "../validation";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setErrors,
  selectErrors,
  selectAccount,
  setTransactions,
  selectPayInput,
  setPayInput,
  setBalance,
} from "../store/mainSlice";

// importing stylesheets
import "../stylesheets/RegisterLogin.css";

// pay component

const Pay = () => {
  const [localScreenMode, setLocalScreenMode] = useState(0);

  const dispatch = useDispatch();
  const errors = useSelector(selectErrors);
  const payInput = useSelector(selectPayInput);
  const accountBalance = useSelector(selectAccount).balance;

  useEffect(() => {
    dispatch(
      setPayInput({
        payeeName: "",
        sortCode: "",
        accountNumber: "",
        amount: "",
      })
    );
  }, []);

  const errorMessage = {
    message: "ensure the entered data is correct",
    progressColor: "red",
  };

  let amountCheck;

  if (accountBalance - payInput.amount < 0) {
    amountCheck = "amount exceeds balance";
  } else {
    amountCheck = "";
  }

  let localErrors = null;

  const onInput = async (e) => {
    // console.log(payInput);
    const result = { ...payInput, [e.target.name]: e.target.value };

    // validate
    localErrors = await validate(result, "pay");

    // console.log(localErrors);

    dispatch(setErrors(localErrors));
    dispatch(setPayInput(result));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (errors) {
      console.log("Form NOT submitted.");
      toastTrigger(errorMessage);
      return;
    }

    console.log(errors);

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

    console.log(registerJson);

    const amount = registerJson.amount;
    const transactionDetails = registerJson.payeeName;

    let formattedPaymentAmount = parseFloat(amount).toFixed(2);
    const decimalPlaces = formattedPaymentAmount.split(".")[1];

    if (decimalPlaces && decimalPlaces.length === 1) {
      formattedPaymentAmount += "0";
    }

    console.log(formattedPaymentAmount);

    const today = new Date();
    const month = today.getMonth() + 1; // Get the current month (0-based index, so add 1)
    const day = today.getDate(); // Get the current day of the month
    const year = today.getFullYear(); // Get the current year

    // Format the date as "MM/DD/YYYY"
    const transactionDate = `${day.toString().padStart(2, "0")}/${month
      .toString()
      .padStart(2, "0")}/${year}`;

    const polishedTransaction = {
      type: "sent",
      payeeName: transactionDetails,
      date: transactionDate,
      amount: formattedPaymentAmount,
    };

    try {
      const { data } = await axios.post(
        `${process.env.API_LINK}transaction/pay`,
        { ...registerJson },
        {
          withCredentials: true,
        }
      );

      if (data.status === 1) {
        toastTrigger({
          message: "payment successful",
          progressColor: "#007b60",
        });

        dispatch(setPayInput(registerJson));
        dispatch(setBalance(accountBalance - amount));
        dispatch(
          setTransactions({
            type: "sent",
            details: transactionDetails,
            date: transactionDate,
            amount: formattedPaymentAmount,
          })
        );

        setLocalScreenMode(1);

        setTimeout(() => {
          setLocalScreenMode(0);
        }, 1500);

        return;
      } else {
        console.log(data.reason);

        toastTrigger({
          message: "incorrect data",
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
                name="amount"
                placeholder="£99.99"
                onInput={onInput}
              ></Input>
              <p className="errorMessage">
                {errors && errors.amount}
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
