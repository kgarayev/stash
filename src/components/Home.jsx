import React from "react";
import "../stylesheets/Home.css";
import ukIcon from "../assets/icons/uk.svg";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";

const Home = () => {
  return (
    <>
      <div className="homeHeader">
        <h1>Home</h1>
      </div>

      <div className="homeContainer">
        <div className="transactionsHeader">
          <div>
            <h2>£5,000.00</h2>
            <p>british pound</p>
          </div>

          <img src={ukIcon} alt="ukIcon" className="currencyIcon" />
        </div>

        <div className="transactionsMain">
          <div className="transactionsMainHeader">
            <h2>Transactions</h2>

            <div className="homeIcons">
              <ExpandCircleDownOutlinedIcon></ExpandCircleDownOutlinedIcon>
            </div>
          </div>

          <div className="transactionElement">
            <div className="elementSection"></div>
            <div className="elementSection"></div>
            <div className="elementSection"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
<>
  <h1>Home</h1>
</>;
