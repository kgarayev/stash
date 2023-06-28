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

  account: {
    name: "current account",
    currencyCode: "gbp",
    currencyName: "british pound",
    currencySymbol: "£",
    currencyCountry: "UK",
    balance: 5000,
    transactions: [
      {
        type: "sent",
        details: "Rick Sanchez",
        date: "5 March 2023",
        amount: 199.99,
      },
      {
        type: "received",
        details: "Morty Smith",
        date: "15 September 2023",
        amount: 871.34,
      },
      {
        type: "sent",
        details: "Rick Sanchez",
        date: "5 March 2023",
        amount: 192.99,
      },
      {
        type: "received",
        details: "Morty Smith",
        date: "15 September 2023",
        amount: 870.34,
      },
      {
        type: "sent",
        details: "Kanan Garayev",
        date: "5 March 2023",
        amount: 99969.99,
      },
      {
        type: "received",
        details: "Arif Garayev",
        date: "15 September 2023",
        amount: 12111.34,
      },
      {
        type: "sent",
        details: "Kanan Garayev",
        date: "5 March 2023",
        amount: 99199.99,
      },
      {
        type: "received",
        details: "Arif Garayev",
        date: "15 September 2023",
        amount: 11191.34,
      },
    ],
  },
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
      console.log(action);
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
} = mainSlice.actions;

// exporting the selectors
export const selectRegisterInput = (state) => state.main.registerInput;
export const selectErrors = (state) => state.main.errors;
export const selectLoginInput = (state) => state.main.loginInput;
export const selectScreenMode = (state) => state.main.screenMode;
export const selectToast = (state) => state.main.toast;
export const selectAccount = (state) => state.main.account;
export const selectTransactions = (state) => state.main.account.transactions;

export default mainSlice.reducer;
