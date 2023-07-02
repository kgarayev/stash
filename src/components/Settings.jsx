import React from "react";
import "../stylesheets/Home.css";
import "../stylesheets/AltTemplate.css";

import Notifications from "./Notifications";
import PasswordChange from "./PasswordChange";
import DeleteAccount from "./DeleteAccount";

const Settings = () => {
  return (
    <>
      <div className="mainHomeContainer">
        <div className="homeHeader">
          <h1>Settings</h1>
        </div>

        <div className="homeContainer helpContainer">
          <div className="helpHeader">
            <div>
              <p></p>
            </div>
          </div>

          <div className="settingsBody">
            <div className="accordionContainer">
              <div className="accordionBox">
                <Notifications />
              </div>

              <div className="accordionBox">
                <PasswordChange />
              </div>

              <div className="accordionBox">
                <DeleteAccount />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
