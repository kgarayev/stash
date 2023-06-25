import { createSlice } from "@reduxjs/toolkit";

// create initial state
const initialState = {
  registerInput: {
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
  },
  errors: null,
  loginInput: {
    email: "",
    password: "",
  },
  screenMode: 0,
};

// export the rducer functions
export const mainSlice = createSlice({
  name: "main",
  initialState,

  reducers: {
    // save the registration input values
    setRegisterInput: (state, action) => {
      state.registerInput = action.payload;
    },

    // record the joi validation errors
    setErrors: (state, action) => {
      state.errors = action.payload;
    },

    // save the registration input values
    setLoginInput: (state, action) => {
      state.loginInput = action.payload;
    },

    // set screen mode
    setScreenMode: (state, action) => {
      state.screenMode = action.payload;
    },

    setToast: (state, action) => {
      state.toast = action.payload;
    },
  },
});

// exporting the reducer functions
export const {
  setRegisterInput,
  setErrors,
  setLoginInput,
  setScreenMode,
  setToast,
} = mainSlice.actions;

// exporting the selectors
export const selectRegisterInput = (state) => state.main.registerInput;
export const selectErrors = (state) => state.main.errors;
export const selectLoginInput = (state) => state.main.loginInput;
export const selectScreenMode = (state) => state.main.screenMode;
export const selectToast = (state) => state.main.toast;

export default mainSlice.reducer;
