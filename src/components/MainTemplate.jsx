import React, { useState, useEffect } from "react";
import Name from "./Name";
import Menu from "./Menu";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToast, setScreenMode, selectScreenMode } from "../store/mainSlice";
import { toastTrigger } from "../helpers/helpers";
import Loading from "./Loading"

// importing stylesheets
import logo from "../assets/logos/Logo7.svg";
import "../stylesheets/MainTemplate.css";

// mui stuff import
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Footer from "./Footer";

// main dashboard / home screen component

const MainTemplate = (props) => {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [menuVisibility, setMenuVisibility] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setScreenMode(0));    }, 1500);

      const fetchData =async ()=> {
        const {data} = await axios.get("http://localhost:6001/account/");
        setIsLoading(false);

        console.log(data);
  
        if (data.status===0) {
          navigate("/login");
          console.log("doesnt work");
          return
        }
  
        console.log("works fine");
  
        return
  
            // if (!localStorage.getItem("token")) {
      //   console.log(localStorage.getItem("token"));
      //   navigate("/login");
      // } else {
      //   // render transaction details 
      //   // get the data from the backend 
      //   // if the toke is there, then check the credentials 
      //   // if it doesnt authenticate, then redirect to login 
      //   // get all the data necessary then send to store and render to the screen 
      //   // important to get the data here and then redirect 
      //   // doesnt matter where to get the data 
      //   // to destroy the toke is localstorage clear 
      // }
      }

     fetchData();

  });

  const { component } = props;
  const dispatch = useDispatch();


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

  if(isLoading) {
    return <Loading/>
  }

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
