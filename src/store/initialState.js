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
    transactions: [
      {
        type: "sent",
        details: "Rick Sanchez",
        date: "05/03/2023",
        amount: 199.99,
      },
      {
        type: "received",
        details: "Morty Smith",
        date: "15/09/2023",
        amount: 871.34,
      },
      {
        type: "sent",
        details: "Rick Sanchez",
        date: "01/03/2022",
        amount: 192.99,
      },
      {
        type: "received",
        details: "Morty Smith",
        date: "30/09/2021",
        amount: 870.34,
      },
      {
        type: "sent",
        details: "Kanan Garayev",
        date: "10/09/2021",
        amount: 99969.99,
      },
      {
        type: "received",
        details: "Arif Garayev",
        date: "04/03/2021",
        amount: 12111.34,
      },
      {
        type: "sent",
        details: "Kanan Garayev",
        date: "10/02/2021",
        amount: 99199.99,
      },
      {
        type: "received",
        details: "Arif Garayev",
        date: "11/01/2021",
        amount: 11191.34,
      },
    ],
  },
};
