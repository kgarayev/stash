import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

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

    setAccount: (state, action) => {
      state.account = action.payload;

      // in this format

      // name: "current account",
      // currency: "gbp",
      // currencySymbol: "£",
      // balance: 5000,
      // transaction: 5000,
    },

    setBalance: (state, action) => {
      state.account.balance = action.payload;
    },

    setTransactions: (state, action) => {
      // using stack data structure - LIFO
      state.account.transactions.unshift(action.payload);

      // in this format

      // {
      //   type: "received",
      //   details: "Morty Smith",
      //   date: "15 September 2023",
      //   amount: 870.34,
      // }
    },

    setPayInput: (state, action) => {
      state.payInput = action.payload;
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
  setTransactions,
  setAccount,
  setPayInput,
  setBalance,
} = mainSlice.actions;

// exporting the selectors
export const selectRegisterInput = (state) => state.main.registerInput;
export const selectErrors = (state) => state.main.errors;
export const selectLoginInput = (state) => state.main.loginInput;
export const selectScreenMode = (state) => state.main.screenMode;
export const selectToast = (state) => state.main.toast;
export const selectAccount = (state) => state.main.account;
export const selectTransactions = (state) => state.main.account.transactions;
export const selectPayInput = (state) => state.main.payInput;

export default mainSlice.reducer;
