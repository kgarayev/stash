import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainSlice";

// setting up the store
export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
});
