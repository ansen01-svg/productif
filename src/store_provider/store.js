import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app_slice";
import firestoreReducer from "./firestore_slice";

const store = configureStore({
  reducer: {
    appReducer: appReducer,
    firestoreReducer: firestoreReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
