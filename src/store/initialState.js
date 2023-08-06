// create initial state
export const initialState = {
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

  payInput: {
    payeeName: "",
    sortCode: "",
    accountNumber: "",
    paymentAmount: "",
  },

  passwordChange: {
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  },

  debitInput: {
    cardNumber: "",
    expiryDate: "",
    CVV: "",
  },

  account: {
    holderName: "",
    firstName: "",
    lastName: "",
    name: "",
    dob: "",
    phoneNumber: "",
    accountNumber: "",
    password: "",
    sortCode: "",
    currencyCode: "",
    currencyName: "",
    currencySymbol: "",
    currencyCountry: "",
    balance: "",
  },
};
