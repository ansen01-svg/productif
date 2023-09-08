import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: localStorage.getItem("mode") || "light",
  user: null,
  tasks: [],
  important: [],
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setMode: (state, { payload }) => {
      if (state.mode === payload) return;
      state.mode = payload;
    },
    setUser: (state) => {
      const token = localStorage.getItem("token");

      if (token) {
        const currentUser = JSON.parse(localStorage.getItem("user"));
        state.user = currentUser.user;
      } else {
        state.user = null;
      }
    },
  },
});

export const { setMode, setUser } = appSlice.actions;

export default appSlice.reducer;
