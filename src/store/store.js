import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainSlice";

export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
});
