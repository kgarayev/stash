import React, { useState } from "react";
import Name from "./Name";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToast, setScreenMode } from "../store/mainSlice";
import { toastTrigger } from "../helpers/helpers";

// importing stylesheets
import logo from "../assets/logos/Logo7.svg";
import "../stylesheets/MainTemplate.css";
import "../stylesheets/AltTemplate.css";

// mui stuff import
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Footer from "./Footer";

// alternative template for different menu items

const AltTemplate = (props) => {
  // local state
  const [menuVisibility, setMenuVisibility] = useState(false);
  const { component } = props;
  const dispatch = useDispatch();

  // trigger toast
  const toast = {
    message: "Hello from Main",
    progressColor: "var(--primary-color)",
  };

  // if menu is clicked
  const onMenuClick = () => {
    setMenuVisibility(!menuVisibility);
  };

  // if other items are clicked
  const onClick = (e) => {
    dispatch(setScreenMode(e.currentTarget.id));
  };

  return (
    <>
      <div className="mainComponent">
        {/* showing header  */}
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

        {/* showing footer condiitonally  */}
        <Footer footerVisibility={false} />
      </div>
    </>
  );
};

export default AltTemplate;
