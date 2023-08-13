import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { toastTrigger } from "../helpers/helpers";
import { setToast, setScreenMode, selectAccount } from "../store/mainSlice";
import Name from "./Name";
import Menu from "./Menu";

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
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [menuVisibility, setMenuVisibility] = useState(false);

  const { component } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_LINK}account/`,
          {
            headers: {
              token: token,
            },
            withCredentials: true, // Include credentials
          }
        );
        setIsLoading(false);

        if (data.status === 0) {
          navigate("/login");
          // console.log("doesnt work");
          return;
        }
        console.log("alt template works fine");
        return;
      } catch (e) {
        console.log(e);

        toastTrigger({
          message: "something has gone wrong",
          progressColor: "#c90909",
        });
      }
    };

    fetchData();
  }, []);

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

  if (isLoading) {
    return <Loading />;
  }

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
