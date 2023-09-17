import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDailyTasks, getWeeklyTasks } from "./firestore_thunk";

export const fetchDailyTasks = createAsyncThunk(
  "firestore/fetchDailyTasks",
  getDailyTasks
);

export const fetchWeeklyTasks = createAsyncThunk(
  "firestore/fetchWeeklyTasks",
  getWeeklyTasks
);

const initialState = {
  dailyTasks: [],
  weeklyTasks: [],
  status: "idle",
  error: null,
};

const firestoreSlice = createSlice({
  name: "firestore",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDailyTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDailyTasks.fulfilled, (state, action) => {
        state.status = "success";
        state.dailyTasks = action.payload;
      })
      .addCase(fetchDailyTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchWeeklyTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeeklyTasks.fulfilled, (state, action) => {
        state.status = "success";
        state.weeklyTasks = action.payload;
      })
      .addCase(fetchWeeklyTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default firestoreSlice.reducer;
