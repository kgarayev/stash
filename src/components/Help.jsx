import React from "react";
import "../stylesheets/Home.css";
import "../stylesheets/AltTemplate.css";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

// help or customer support component

const Help = () => {
  return (
    <>
      <div className="mainHomeContainer">
        <div className="homeHeader">
          <h1>Help</h1>
        </div>

        <div className="homeContainer helpContainer">
          <div className="helpHeader">
            <div>
              <p>
                If you need any assistance, please don't hesitate to contact us
                via phone or email using the contact details provided below.
              </p>
            </div>
          </div>

          <div className="helpBody">
            <div className="helpSection">
              <div>
                <LocalPhoneRoundedIcon fontSize="large" />
              </div>
              <div>
                <p>07123 4567890</p>
              </div>
            </div>

            <div className="helpSection">
              <div>
                <MailOutlineRoundedIcon fontSize="large" />
              </div>
              <div>
                <p>help@stash.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
