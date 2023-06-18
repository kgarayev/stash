import React from "react";
import Interface from "./components/Interface";
import "./stylesheets/App.css";
import "./stylesheets/components.css";
import theme from "./theme";
import { useTheme } from "@mui/material/styles";

const App = () => {
  const theme = useTheme();

  return (
    <>
      <Interface />
    </>
  );
};

export default App;
