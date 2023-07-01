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
  },

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
