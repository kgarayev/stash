import React, {useState, useEffect} from "react";
import axios from "axios";
import Loading from "./Loading";
import HubContent from "./HubContent";

import "../stylesheets/Home.css";
import "../stylesheets/Transfer.css";
import "../stylesheets/Button.css";

// hub component

const Hub = () => {
  


  return (
    <>
      <div className="mainHomeContainer">
        <div className="homeHeader">
          <h1>Hub</h1>
        </div>

        <div className="homeContainer">
          <div className="accountHeader">
            <div className="hubContainer">
              <HubContent/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hub;
