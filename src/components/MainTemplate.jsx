import React from "react";
import Name from "./Name";
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
  const { component } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toast = {
    message: "Hello from Main",
    progressColor: "var(--primary-color)",
  };

  const onClick = (e) => {
    switch (e.currentTarget.id) {
      case "home":
        dispatch(setScreenMode(2));
        break;

      case "transfer":
        dispatch(setScreenMode(3));
        break;

      case "hub":
        dispatch(setScreenMode(4));
        break;

      case "profile":
        dispatch(setScreenMode(5));
        break;

      case "help":
        dispatch(setScreenMode(6));
        break;

      case "notifications":
        dispatch(setScreenMode(7));
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="mainComponent">
        <div className="mainComponentHeader">
          <Link to="/main" className="mainLogoLink">
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

            <div onClick={onClick} id="help">
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
            </div>

            <div onClick={onClick} id="profile">
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
        </div>

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
