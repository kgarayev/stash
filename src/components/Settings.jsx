import React from "react";
import "../stylesheets/Home.css";
import "../stylesheets/AltTemplate.css";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

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

          <div className="helpBody">
            <div className="helpSection">
              <div></div>
              <div>
                <p></p>
              </div>
            </div>

            <div className="helpSection">
              <div></div>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
