import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheets/Menu.css";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

const Menu = (props) => {
  const { visibility, onClick } = props;
  const navigate = useNavigate();

  return (
    <>
      <div className={`menuContainer ` + `${visibility ? "visibleMenu" : ""}`}>
        <div onClick={onClick} className="backArrow">
          <ArrowBackRoundedIcon fontSize="large" />
        </div>

        <div className="menuBody">
          <div>
            <h2>Kanan Garayev</h2>
          </div>

          <div className="menuSelect">
            <div className="menuOption">
              <div>
                <PermIdentityIcon />
              </div>
              <h3>your details</h3>
            </div>

            <div className="menuOption">
              <div>
                <SettingsOutlinedIcon />
              </div>
              <h3>settings</h3>
            </div>

            <div className="menuOption">
              <div>
                <HelpOutlineOutlinedIcon />
              </div>
              <h3>help</h3>
            </div>

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
