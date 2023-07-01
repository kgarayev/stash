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

  debitInput: {
    cardNumber: "",
    expiryDate: "",
    CVV: "",
  },

  account: {
    holderName: "Rick Sanchez",
    firstName: "Richard",
    lastName: "Sanchez",
    name: "current account",
    dob: "01/01/1901",
    phoneNumber: "+441234567890",
    accountNumber: 12345678,
    sortCode: 123456,
    currencyCode: "gbp",
    currencyName: "british pound",
    currencySymbol: "£",
    currencyCountry: "UK",
    balance: 5000,
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
