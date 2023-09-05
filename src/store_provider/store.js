import { configureStore } from "@reduxjs/toolkit";
import reducer from "./app_slice";

const store = configureStore({
  reducer: {
    appReducer: reducer,
  },
});

export default store;
