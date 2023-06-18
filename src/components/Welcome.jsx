import React from "react";
import Logo from "./Logo";
import Name from "./Name";
import "./styles/Welcome.css";
import { Button } from "antd";

const Welcome = () => {
  return (
    <>
      <div className="welcomeContainer">
        <Name></Name>
        <Logo></Logo>
        <Button type="primary">Primary Button</Button>
      </div>
    </>
  );
};

export default Welcome;
