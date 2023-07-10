import React from "react";
import { useDispatch } from "react-redux";
import { setToast, setScreenMode, selectScreenMode } from "../store/mainSlice";
import { toastTrigger } from "../helpers/helpers";

// importing stylesheets
import "../stylesheets/MainTemplate.css";
import "../stylesheets/AltTemplate.css";

// mui stuff import
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";

// footer component

const Footer = (props) => {
  const { footerVisibility } = props;

  const dispatch = useDispatch();

  const toast = {
    message: "Hello from Main",
    progressColor: "var(--primary-color)",
  };

  const onClick = (e) => {
    dispatch(setScreenMode(e.currentTarget.id));
  };

  return (
    <>
      <div
        className={
          `mainComponentFooter ` + `${footerVisibility ? "" : "altFooter"}`
        }
      >
        <div className="section" onClick={onClick} id="home">
          <div className="sectionIcon">
            <HomeOutlinedIcon
              sx={{
                padding: "0rem",
                margin: "0",
                width: "3rem",
                height: "3rem",
              }}
              fontSize="large"
            />
          </div>
          <div>
            <p className="sectionText">home</p>
          </div>
        </div>

        <div className="section central" onClick={onClick} id="transfer">
          <div className="sectionIcon">
            <SwapVerticalCircleIcon
              sx={{
                padding: "0rem",
                margin: "0",
                width: "4rem",
                height: "4rem",
              }}
              fontSize="large"
            />
          </div>

          <div>
            <p className="sectionText">transfer</p>
          </div>
        </div>

        <div className="section" id="hub" onClick={onClick}>
          <div className="sectionIcon">
            <DashboardOutlinedIcon
              sx={{
                padding: "0rem",
                margin: "0",
                width: "3rem",
                height: "3rem",
              }}
              fontSize="large"
            />
          </div>

          <div>
            <p className="sectionText">hub</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
