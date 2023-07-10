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

    // set the toast message
    setToast: (state, action) => {
      state.toast = action.payload;
    },

    // set up account
    setAccount: (state, action) => {
      state.account = action.payload;

      // in this format

      // name: "current account",
      // currency: "gbp",
      // currencySymbol: "£",
      // balance: 5000,
      // transaction: 5000,
    },

    // set account balance
    setBalance: (state, action) => {
      state.account.balance = action.payload;
    },

    // set transactions
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

    // pay input
    setPayInput: (state, action) => {
      state.payInput = action.payload;
    },

    // debit card input
    setDebitInput: (state, action) => {
      state.debitInput = action.payload;
    },

    // change password
    changePassword: (state, action) => {
      state.passwordChange = action.payload;
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
  setDebitInput,
  changePassword,
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
export const selectDebitInput = (state) => state.main.debitInput;
export const selectPasswordChange = (state) => state.main.passwordChange;

export default mainSlice.reducer;
