import React, { useState } from "react";
import Name from "./Name";
import Menu from "./Menu";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToast, setScreenMode, selectScreenMode } from "../store/mainSlice";
import { toastTrigger } from "../helpers/helpers";

// importing stylesheets
import logo from "../assets/logos/Logo7.svg";
import "../stylesheets/MainTemplate.css";

// mui stuff import
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";
import IconButton from "@mui/material/IconButton";

const MainTemplate = (props) => {
  const [menuVisibility, setMenuVisibility] = useState(false);

  const { component } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toast = {
    message: "Hello from Main",
    progressColor: "var(--primary-color)",
  };

  const onMenuClick = () => {
    setMenuVisibility(!menuVisibility);
  };

  const onClick = (e) => {
    dispatch(setScreenMode(e.currentTarget.id));
  };

  return (
    <>
      <div className="mainComponent">
        <div className="mainComponentHeader">
          <Link to="/main" className="mainLogoLink" id="home" onClick={onClick}>
            <div className="mainComponentLogoContainer">
              <div className="mainComponentLogo">
                <img src={logo} alt="logo" className="logo" />
              </div>
              <Name />
            </div>
          </Link>

          <div className="mainControls">
            {/* <div onClick={onClick} id="notifications">
              <button className="mainControlsButton">
                <CircleNotificationsRoundedIcon
                  sx={{
                    padding: "0rem",
                    margin: "0rem",
                    width: "3.5rem",
                    height: "3.5rem",
                  }}
                  color="primary"
                  fontSize="large"
                />
              </button>
            </div> */}

            {/* <div onClick={onClick} id="help">
              <button className="mainControlsButton">
                <HelpRoundedIcon
                  sx={{
                    padding: "0rem",
                    margin: "0",
                    width: "3.5rem",
                    height: "3.5rem",
                  }}
                  color="primary"
                  fontSize="large"
                ></HelpRoundedIcon>
              </button>
            </div> */}

            <div onClick={onMenuClick} id="profile">
              <button className="mainControlsButton">
                <AccountCircleRoundedIcon
                  sx={{
                    padding: "0rem",
                    margin: "0",
                    width: "3.5rem",
                    height: "3.5rem",
                  }}
                  color="primary"
                  fontSize="large"
                ></AccountCircleRoundedIcon>{" "}
              </button>
            </div>
          </div>

          <Menu visibility={menuVisibility} onClick={onMenuClick} />
        </div>

        {/* main component rendering  */}
        <div className="mainSubComponent">
          <div className="mainBoxWrapper">
            <div className="mainComponentBox">{component}</div>
          </div>
          <div className="placeholder"></div>
        </div>

        <div className="mainComponentFooter">
          <div className="section" onClick={onClick} id="home">
            <HomeOutlinedIcon
              sx={{
                padding: "0rem",
                margin: "0",
                width: "2.5rem",
                height: "2.5rem",
              }}
              fontSize="large"
            />

            <p className="sectionText">home</p>
          </div>

          <div className="section central" onClick={onClick} id="transfer">
            <SwapVerticalCircleIcon
              sx={{
                padding: "0rem",
                margin: "0",
                width: "4rem",
                height: "4rem",
              }}
              fontSize="large"
            />

            <p className="sectionText">transfer</p>
          </div>

          <div className="section" id="hub" onClick={onClick}>
            <DashboardOutlinedIcon
              sx={{
                padding: "0rem",
                margin: "0",
                width: "2.5rem",
                height: "2.5rem",
              }}
              fontSize="large"
            />

            <p className="sectionText">hub</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainTemplate;
