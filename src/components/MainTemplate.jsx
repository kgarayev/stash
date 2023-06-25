import React from "react";
import Name from "./Name";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToast } from "../store/mainSlice";
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

  const toast = {
    message: "Hello from Main",
    progressColor: "var(--primary-color)",
  };

  return (
    <>
      <div className="mainComponent">
        <div className="mainComponentHeader">
          <Link to="/" className="mainLogoLink">
            <div className="mainComponentLogoContainer">
              <div className="mainComponentLogo">
                <img src={logo} alt="logo" className="logo" />
              </div>
              <Name></Name>
            </div>
          </Link>

          <div className="mainControls">
            <div>
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
                ></CircleNotificationsRoundedIcon>
              </button>
            </div>

            <div>
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

            <div>
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
        </div>

        <div className="mainComponentFooter">
          <div className="section">
            <HomeOutlinedIcon
              sx={{
                padding: "0rem",
                margin: "0",
                width: "2.5rem",
                height: "2.5rem",
              }}
              fontSize="large"
            ></HomeOutlinedIcon>

            <p className="sectionText">home</p>
          </div>

          <div className="section central">
            <SwapVerticalCircleIcon
              sx={{
                padding: "0rem",
                margin: "0",
                width: "4rem",
                height: "4rem",
              }}
              fontSize="large"
            ></SwapVerticalCircleIcon>

            <p className="sectionText">transfer</p>
          </div>

          <div className="section">
            <DashboardOutlinedIcon
              sx={{
                padding: "0rem",
                margin: "0",
                width: "2.5rem",
                height: "2.5rem",
              }}
              fontSize="large"
            ></DashboardOutlinedIcon>

            <p className="sectionText">hub</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainTemplate;
