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
  placeholderTaskId: null,
  status: "idle",
  error: null,
  sortedBy: null,
};

const firestoreSlice = createSlice({
  name: "firestore",
  initialState,
  reducers: {
    sortTasksBy: (state, { payload }) => {
      state.sortedBy = payload;
    },
    setPlaceHolderTaskId: (state, { payload }) => {
      if (payload === undefined) return;
      state.placeholderTaskId = payload;
    },
  },
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

export const { sortTasksBy, setPlaceHolderTaskId } = firestoreSlice.actions;

export default firestoreSlice.reducer;
