import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import { selectRegisterInput, selectAccount } from "../store/mainSlice";
import "../stylesheets/Home.css";
import "../stylesheets/Transfer.css";
import "../stylesheets/AltTemplate.css";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

const Profile = () => {
  const account = useSelector(selectAccount);

  return (
    <>
      <div className="mainHomeContainer">
        <div className="homeHeader">
          <h1>{account.holderName}</h1>
        </div>

        <div className="homeContainer helpContainer">
          <div className="profileHeader">
            <div>
              <h2>Personal Information</h2>
            </div>

            <div className="editButton">
              <Button
                text={"edit details"}
                type={"secondary"}
                textSize={"1.2rem"}
              ></Button>
            </div>
          </div>

          <div className="bankTransferBox">
            <div className="transferDetails profileDetails">
              <div className="detailOption">
                <h3>full legal first name</h3>
                <p>{account.firstName}</p>
              </div>
              <div className="detailOption">
                <h3>full legal last name</h3>
                <p>{account.lastName}</p>
              </div>
              <div className="detailOption">
                <h3>date of birth</h3>
                <p>{account.dob}</p>
              </div>
              <div className="detailOption">
                <h3>phone number</h3>
                <p>{account.phoneNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
