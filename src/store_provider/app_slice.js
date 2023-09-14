import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: localStorage.getItem("mode") || "light",
  user: null,
  dailyTasks: [],
  weeklyTasks: [],
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
    setDailyTasks: (state, { payload }) => {
      state.dailyTasks = payload;
    },
    setWeeklyTasks: (state, { payload }) => {
      state.weeklyTasks = payload;
    },
  },
});

export const { setMode, setUser, setDailyTasks, setWeeklyTasks } =
  appSlice.actions;

export default appSlice.reducer;
