import React from "react";
import Interface from "./components/Interface";
import "./App.css";
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
