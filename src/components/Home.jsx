import React from "react";
import "../stylesheets/Home.css";
import Account from "./Account";

const Home = () => {
  return (
    <>
      <div className="mainHomeContainer">
        <div className="homeHeader">
          <h1>Home</h1>
        </div>

        <Account></Account>
      </div>
    </>
  );
};

export default Home;
