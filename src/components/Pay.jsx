import React, { useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import StatusUpdate from "./StatusUpdate";
import "../stylesheets/RegisterLogin.css";

const Pay = () => {
  const [localScreenMode, setLocalScreenMode] = useState(0);

  useEffect(() => {
    console.log("hi");
    // Your effect code goes here
    // It will run whenever localScreenMode changes
  }, [localScreenMode]);

  const onSubmit = (e) => {
    e.preventDefault();

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
                name="payee"
                placeholder="full name of the person or company"
              ></Input>
              <p className="errorMessage"></p>
            </div>

            <div className="inputContainer">
              <Input
                label="sort code *"
                type="string"
                name="sortCode"
                placeholder="12-34-56"
              ></Input>
              <p className="errorMessage"></p>
            </div>

            <div className="inputContainer">
              <Input
                label="account number *"
                type="string"
                name="accountNumber"
                placeholder="12345678"
              ></Input>
              <p className="errorMessage"></p>
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
