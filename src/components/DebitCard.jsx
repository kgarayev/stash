import React, { useState } from "react";
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
  setDebitInput,
  selectDebitInput,
  setBalance,
  selectAccount,
} from "../store/mainSlice";

const DebitCard = () => {
  const [localScreenMode, setLocalScreenMode] = useState(0);
  const dispatch = useDispatch();
  const account = useSelector(selectAccount);
  const errors = useSelector(selectErrors);
  const debitInput = useSelector(selectDebitInput);

  const errorMessage = {
    message: "ensure the entered data is correct",
    progressColor: "red",
  };

  let localErrors = null;

  const onInput = async (e) => {
    const result = { ...debitInput, [e.target.name]: e.target.value };

    // validate
    localErrors = await validate(result, "debit");

    dispatch(setErrors(localErrors));
    dispatch(setDebitInput(result));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (errors) {
      console.log("Form NOT submitted.");
      toastTrigger(errorMessage);
      return;
    }

    for (let key in debitInput) {
      if (debitInput[key] === "") {
        console.log("Form NOT submitted.");
        toastTrigger(errorMessage);
        return;
      }
    }

    console.log("Form submitted.");

    // Read the form data
    const form = e.target;

    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const registerJson = Object.fromEntries(formData.entries());

    console.log(registerJson);

    const token = localStorage.getItem("token");

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_LINK}transaction/receive`,
        { ...registerJson },
        {
          headers: {
            token: token,
          },
          withCredentials: true, // Include credentials
        }
      );

      if (data.status === 1) {
        toastTrigger({
          message: "payment successful",
          progressColor: "#007b60",
        });

        dispatch(setBalance(account.balance + registerJson.amount));

        dispatch(setDebitInput(registerJson));

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
                label="amount *"
                type="string"
                name="amount"
                placeholder="£XX.XX"
                onInput={onInput}
              ></Input>
              <p className="errorMessage">{errors && errors.amount}</p>
            </div>

            <div className="inputContainer">
              <Input
                label="card number *"
                type="string"
                name="cardNumber"
                placeholder="0000 0000 0000 0000"
                onInput={onInput}
              ></Input>
              <p className="errorMessage">{errors && errors.cardNumber}</p>
            </div>

            <div className="debitExtras">
              <div className="inputContainer">
                <Input
                  label="expiry date *"
                  type="string"
                  name="expiryDate"
                  placeholder="MM/YY"
                  onInput={onInput}
                ></Input>
                <p className="errorMessage">{errors && errors.expiryDate}</p>
              </div>

              <div className="inputContainer">
                <Input
                  label="CVV *"
                  type="string"
                  name="CVV"
                  placeholder="3 digits"
                  onInput={onInput}
                ></Input>
                <p className="errorMessage">{errors && errors.CVV}</p>
              </div>
            </div>

            <div className="payButton">
              <Button text="receive" type="submit" />
            </div>
          </form>
        </div>
      </>
    );
  } else if (localScreenMode === 1) {
    return <StatusUpdate message={"money received"} />;
  }
};

export default DebitCard;
