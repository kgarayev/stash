import { createTheme } from "@mui/material/styles";
import Quicksand from "./assets/fonts/Quicksand-VariableFont_wght.ttf";

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand, Sans",
    fontSize: 20,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
              font-family: 'Quicksand';
              font-style: normal;
              font-display: swap;
              font-weight: 500;
              src: local('Raleway'), local('Quicksand'), url(${Quicksand}) format('ttf');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
    },
  },

  palette: {
    mode: "light",
    primary: {
      main: "#00a88f",
    },
    secondary: {
      main: "#bb5ec6",
    },
    background: {
      default: "#f7f7f7",
      paper: "#f7f7f7",
    },
    error: {
      main: "#b71c1c",
    },
    warning: {
      main: "#af4f02",
    },
    info: {
      main: "#2f37ab",
    },
  },
});

export default theme;
