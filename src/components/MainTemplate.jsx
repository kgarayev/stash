import React, { useState, useEffect } from "react";
import Name from "./Name";
import Menu from "./Menu";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setToast,
  setScreenMode,
  selectScreenMode,
  setAccount,
  selectAccount,
} from "../store/mainSlice";
import Loading from "./Loading";
import { toastTrigger } from "../helpers/helpers";

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
  const account = useSelector(selectAccount);

  const { component } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setScreenMode(0));
    }, 1500);

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

        console.log(data);

        if (data.status === 0) {
          console.log("Error:", data.reason);
          navigate("/login");
          return;
        }

        setIsLoading(false);

        // console.log(data.result.account_name);

        const {
          account_name,
          account_number,
          balance,
          currency_code,
          currency_country,
          currency_name,
          currency_symbol,
          sort_code,
          first_name,
          last_name,
          dob,
          number,
        } = data.result;

        // console.log(account_name);

        const newAccount = {
          ...account,
          name: account_name,
          account_name,
          accountNumber: account_number,
          balance,
          currencyCode: currency_code,
          currencyName: currency_name,
          currencyCountry: currency_country,
          currencySymbol: currency_symbol,
          sortCode: sort_code,
          firstName: first_name,
          lastName: last_name,
          dob,
          phoneNumber: number,
        };

        // console.log(newAccount);

        dispatch(setAccount(newAccount));

        console.log("main template works fine");
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
  }, [account.balance]);

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

  if (isLoading) {
    return <Loading />;
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
