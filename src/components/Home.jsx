import React, { useState, useEffect } from "react";
import Loading from "./Loading"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheets/Home.css";
import Account from "./Account";
import { useSelector, useDispatch } from "react-redux";
import { selectScreenMode } from "../store/mainSlice";


// home component that renders something else to the screen if/when required

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [visibility, setVisibility] = useState(false);


  const dispatch = useDispatch();
  const screenMode = useSelector(selectScreenMode);

  return (
    <>
      <div className="mainHomeContainer">
        <div className="homeHeader">
          <h1>Home</h1>
        </div>

        <Account />
      </div>
    </>
  );
};

export default Home;
