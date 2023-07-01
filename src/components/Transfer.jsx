import React, { useState } from "react";
import Button from "./Button";
import "../stylesheets/Home.css";
import "../stylesheets/Transfer.css";
import "../stylesheets/Button.css";
import { useDispatch, useSelector } from "react-redux";
import { setScreenMode, selectScreenMode } from "../store/mainSlice";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";

const Transfer = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <>
      <div className="mainHomeContainer">
        <div className="homeHeader">
          <h1>Pay & Receive</h1>
        </div>

        <div className="homeContainer">
          <div className="accountHeader">
            <div className="transferControls">
              <Tabs
                fullwidth="true"
                value={value}
                onChange={handleChange}
                sx={{
                  width: "100%",
                }}
              >
                <Tab
                  id="pay"
                  icon={<ArrowCircleUpRoundedIcon />}
                  label="pay"
                  sx={{
                    textTransform: "lowercase",
                    width: "50%",
                    fontWeight: "600",
                  }}
                />
                <Tab
                  id="receive"
                  icon={<ArrowCircleDownRoundedIcon />}
                  label="receive"
                  sx={{
                    textTransform: "lowercase",
                    width: "50%",
                    fontWeight: "600",
                  }}
                />
              </Tabs>
            </div>
          </div>
          {value === 0 ? "pay" : "receive"}
        </div>
      </div>
    </>
  );
};

export default Transfer;
