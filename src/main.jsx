import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./stylesheets/index.css";
import { ThemeProvider } from "@mui/system";
import theme from "./theme.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(
  container,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// setting up Router, theme, provider for store

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
