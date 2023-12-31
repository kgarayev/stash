import React, {useState} from "react";
import { Routes, Route, useNavigate  } from "react-router-dom";
import Welcome from "./Welcome";
import Register from "./Register";
import Login from "./Login";
import Error404 from "./Error404";

import Template from "./Template";
import StatusUpdate from "./StatusUpdate";
import MainTemplate from "./MainTemplate";
import Home from "./Home";
import Transfer from "./Transfer";
import Hub from "./Hub";
import Profile from "./Profile";
import Help from "./Help";
import Settings from "./Settings";
import AltTemplate from "./AltTemplate";
import { useSelector } from "react-redux";
import { selectScreenMode } from "../store/mainSlice";
import RedirectToHome from "./RedirectToHome"

// main interface component
const Interface = () => {

  const screenMode = useSelector(selectScreenMode);

  // selecting what to show depending on the screen mode
  let registerComponent = <Register />;
  let mainComponent = <Home />;

    

  // return depending on the screenmode
  switch (screenMode) {
    case 0:
      registerComponent = <Register />;
      break;

    case 1:
      registerComponent = <StatusUpdate message={"registration complete"} />;
      break;

    case "home":
      mainComponent = <Home />;
      break;

    case "transfer":
      mainComponent = <Transfer />;
      break;

    case "hub":
      mainComponent = <Hub />;
      break;

    case "profile":
      mainComponent = <Profile />;
      break;

    case "help":
      mainComponent = <Help />;
      break;

    default:
      break;
  }

  return (
    // various routes
    <Routes>
      <Route path="/" element={<Welcome />} />

      <Route
        path="/register"
        element={<Template component={registerComponent} />}
      />
      <Route path="/login" element={<Template component={<Login />} />} />

      <Route
        path="/main"
        element={<MainTemplate component={mainComponent} />}
      />

      <Route path="/help" element={<AltTemplate component={<Help />} />} />

      <Route
        path="/settings"
        element={<AltTemplate component={<Settings />} />}
      />

      <Route
        path="/profile"
        element={<AltTemplate component={<Profile />} />}
      />

      <Route path="*" element={<RedirectToHome />} />
    </Routes>
  );
};

export default Interface;
