import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: localStorage.getItem("mode") || "light",
  user: null,
  sortedBy: null,
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setMode: (state, { payload }) => {
      if (state.mode === payload) return;
      state.mode = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { setMode, setUser, setDailyTasks, setWeeklyTasks } =
  appSlice.actions;

export default appSlice.reducer;
