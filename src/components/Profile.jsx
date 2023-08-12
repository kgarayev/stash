import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import { selectAccount } from "../store/mainSlice";
import "../stylesheets/Home.css";
import "../stylesheets/Transfer.css";
import "../stylesheets/AltTemplate.css";

// profile / account page

const Profile = () => {
  const account = useSelector(selectAccount);

  const formatDate = (inputDate) => {
    const dateObj = new Date(inputDate);
    const day = dateObj.getUTCDate().toString().padStart(2, "0");
    const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, "0"); // getUTCMonth() is 0-indexed
    const year = dateObj.getUTCFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

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
                <p>{formatDate(account.dob)}</p>
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
