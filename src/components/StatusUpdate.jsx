import React from "react";
import Logo from "./Logo";

const Success = (props) => {
  const { message } = props;

  return (
    <>
      <div className="statusContainer">
        <h1 className="statusMessage">{message}</h1>
        <div className="statusLogo">
          <Logo></Logo>
        </div>
      </div>
    </>
  );
};

export default Success;
