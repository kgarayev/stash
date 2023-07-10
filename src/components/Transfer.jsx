import React, { useState } from "react";

import "../stylesheets/Home.css";
import "../stylesheets/Transfer.css";
import "../stylesheets/Button.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Pay from "./Pay";
import Receive from "./Receive";

// pay and receive money

const Transfer = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
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
              <div>
                <Tabs
                  fullwidth="true"
                  value={value}
                  onChange={handleChange}
                  sx={{
                    width: "100%",
                    height: "5rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Tab
                    id="pay"
                    label="pay"
                    sx={{
                      textTransform: "lowercase",
                      width: "50%",
                      fontWeight: "600",
                      fontSize: "1.6rem",
                      borderRadius: "2rem 2rem 0 0",
                    }}
                  />
                  <Tab
                    id="receive"
                    label="receive"
                    sx={{
                      textTransform: "lowercase",
                      width: "50%",
                      fontWeight: "600",
                      fontSize: "1.6rem",
                      borderRadius: "2rem 2rem 0 0",
                    }}
                  />
                </Tabs>
              </div>
            </div>
          </div>
          {value === 0 ? <Pay /> : <Receive />}
        </div>
      </div>
    </>
  );
};

export default Transfer;
