import React from "react";
import Interface from "./components/Interface";
import Toast from "./components/Toast";
import "./stylesheets/App.css";
import "./stylesheets/components.css";
import theme from "./theme";
import { useTheme } from "@mui/material/styles";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const theme = useTheme();

  // possibly a useEffect hook 
  // has interval to check the token existence 

  // importing and rendering toast and interface components

  return (
    <>
      <Toast />
      <Interface />
    </>
  );
};

export default App;
