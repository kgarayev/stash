import React, { useState } from "react";

import "../stylesheets/Home.css";
import "../stylesheets/Transfer.css";
import "../stylesheets/Button.css";

const Hub = () => {
  return (
    <>
      <div className="mainHomeContainer">
        <div className="homeHeader">
          <h1>Hub</h1>
        </div>

        <div className="homeContainer">
          <div className="accountHeader">
            <div className="transferControls">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hub;
