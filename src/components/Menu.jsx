import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import { toastTrigger } from "../helpers/helpers";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRegisterInput,
  selectAccount,
  setScreenMode,
} from "../store/mainSlice";
import "../stylesheets/Menu.css";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

// side menu component
const Menu = (props) => {
  const { visibility, onClick } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const account = useSelector(selectAccount);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    console.log(token);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_LINK}user/logout`,
        {}, // Request body (can be empty for logout)
        {
          headers: {
            token: token,
          },
          withCredentials: true, // Include credentials
        }
      );

      console.log(data);

      if (data.status === 1) {
        // Clear token from localStorage
        localStorage.removeItem("token");

        document.cookie = "connect.sid=; Max-Age=-99999999; path=/;";

        // Clear any frontend state if necessary
        dispatch(setScreenMode(0));

        toastTrigger({
          message: "logout successful",
          progressColor: "#007b60",
        });

        console.log("logged out!");

        navigate("/login");
        return;
      } else {
        // Handle the error
        console.error("Logout failed");

        toastTrigger({
          message: "something has gone wrong",
          progressColor: "#c90909",
        });
        return;
      }
    } catch (error) {
      console.error("There was an error logging out", error);

      toastTrigger({
        message: "something has gone wrong",
        progressColor: "#c90909",
      });
      return;
    }
  };

  return (
    <>
      <div
        className={
          `menuContainer ` +
          `largeScreen ` +
          `${visibility ? "visibleMenu" : ""}`
        }
      >
        <div onClick={onClick} className="backArrow">
          <ArrowBackRoundedIcon fontSize="large" />
        </div>

        <div className="menuBody">
          <div>
            <h2>{account.holderName}</h2>
          </div>

          <div className="menuSelect">
            <div className="menuOptionBox homeOff">
              <Link to="/main">
                <div className="menuOption homeOption" onClick={onClick}>
                  <div>
                    <HomeOutlinedIcon fontSize="large" />
                  </div>
                  <h3>home</h3>
                </div>
              </Link>
            </div>

            <div className="menuOptionBox">
              <Link to="/profile">
                <div className="menuOption" onClick={onClick}>
                  <div>
                    <PermIdentityIcon fontSize="large" />
                  </div>
                  <h3>your details</h3>
                </div>
              </Link>
            </div>

            <div className="menuOptionBox">
              <Link to="/settings">
                <div className="menuOption" onClick={onClick}>
                  <div>
                    <SettingsOutlinedIcon fontSize="large" />
                  </div>
                  <h3>settings</h3>
                </div>
              </Link>
            </div>

            <div className="menuOptionBox">
              <Link to="/help">
                <div className="menuOption" onClick={onClick}>
                  <div>
                    <HelpOutlineOutlinedIcon fontSize="large" />
                  </div>
                  <h3>help</h3>
                </div>
              </Link>
            </div>

            <div className="menuOptionBox">
              <div className="menuOption logOut" onClick={handleLogout}>
                <div>
                  <ExitToAppOutlinedIcon fontSize="large" />
                </div>
                <h3>log out</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
