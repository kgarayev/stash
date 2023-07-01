import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "./Button";
import BankTransfer from "./BankTransfer";
import DebitCard from "./DebitCard";

const Receive = () => {
  const [localScreenMode, setLocalScreenMode] = useState(0);

  const onClick = (e) => {
    setLocalScreenMode(e.target.id);
  };

  return (
    <>
      <div className="receiveBox">
        <div className="receiveControls">
          <Button
            text={"bank transfer"}
            type={"tertiary"}
            id="0"
            onClick={onClick}
            textSize={"1.4rem"}
          ></Button>

          <Button
            text={"debit card"}
            type={"tertiary"}
            id="1"
            onClick={onClick}
            textSize={"1.4rem"}
          ></Button>
        </div>

        <div className="selectedReceiveOption">
          {localScreenMode == 0 ? <BankTransfer /> : <DebitCard />}
        </div>
      </div>
    </>
  );
};

export default Receive;
