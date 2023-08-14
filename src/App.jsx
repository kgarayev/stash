import React, { useEffect } from "react";
import Interface from "./components/Interface";
import Toast from "./components/Toast";
import "./stylesheets/App.css";
import "./stylesheets/components.css";
import theme from "./theme";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const theme = useTheme();

  const fetchData = async () => {
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
      if (data) {
        return true;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  if (fetchData()) {
    return (
      <>
        <Toast />
        <Interface />
      </>
    );
  }

  return (
    <>
      <h1>Please wait, the server is loading</h1>
    </>
  );
};

export default App;
