import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRegisterInput, selectAccount } from "../store/mainSlice";
import "../stylesheets/Menu.css";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Menu = (props) => {
  const { visibility, onClick } = props;
  const navigate = useNavigate();
  const account = useSelector(selectAccount);

  return (
    <>
      <div className={`menuContainer ` + `${visibility ? "visibleMenu" : ""}`}>
        <div onClick={onClick} className="backArrow">
          <ArrowBackRoundedIcon fontSize="large" />
        </div>

        <div className="menuBody">
          <div>
            <h2>{account.holderName}</h2>
          </div>

          <div className="menuSelect">
            <Link to="/main">
              <div className="menuOption" onClick={onClick}>
                <div>
                  <HomeOutlinedIcon />
                </div>
                <h3>home</h3>
              </div>
            </Link>

            <Link to="/profile">
              <div className="menuOption" onClick={onClick}>
                <div>
                  <PermIdentityIcon />
                </div>
                <h3>your details</h3>
              </div>
            </Link>

            <Link to="/settings">
              <div className="menuOption" onClick={onClick}>
                <div>
                  <SettingsOutlinedIcon />
                </div>
                <h3>settings</h3>
              </div>
            </Link>

            <Link to="/help">
              <div className="menuOption" onClick={onClick}>
                <div>
                  <HelpOutlineOutlinedIcon />
                </div>
                <h3>help</h3>
              </div>
            </Link>

            <div
              className="menuOption"
              onClick={() => {
                navigate("/");
              }}
            >
              <div>
                <ExitToAppOutlinedIcon />
              </div>
              <h3>log out</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
