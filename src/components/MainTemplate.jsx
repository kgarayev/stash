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
import Footer from "./Footer";

// main dashboard / home screen component

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
    dispatch(setScreenMode(0));
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

        <Footer footerVisibility={true} />
      </div>
    </>
  );
};

export default MainTemplate;
