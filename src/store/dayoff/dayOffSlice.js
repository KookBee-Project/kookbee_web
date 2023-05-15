import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ErrorResponse } from "@remix-run/router";
import { api } from "../../api/api";

const initialState = {
  bootcampList: [],
  dayOffList: [],
  status: "idle",
  error: null,
};

export const applyDayOff = createAsyncThunk(
  "/dayoff/apply",
  async (request, thunkAPI) => {
    try {
      const response = await api("POST", `/class/dayoff/${request.bootcampId}/apply`, request);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

export const getBootcampList = createAsyncThunk(
  "/dayoff/bootcampList",
  async (bootcampId, thunkAPI) => {
    try {
      const response = await api("GET", `/class/dayoff/${bootcampId}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

export const getDayOffList = createAsyncThunk(
  "/dayoff/dayOffList",
  async (bootcampId, thunkAPI) => {
    try {
      const response = await api("GET", `/class/dayoff/${bootcampId}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

const dayOffSlice = createSlice({
  name: "dayOff",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(applyDayOff.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(applyDayOff.fulfilled, (state, action) => {
        state.status = "successed";
        // state.data = action.payload;
      })
      .addCase(applyDayOff.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
        console.log(state.error);
      })
      .addCase(getBootcampList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getBootcampList.fulfilled, (state, action) => {
        state.status = "successed";
        state.bootcampList = action.payload;
      })
      .addCase(getBootcampList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getDayOffList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getDayOffList.fulfilled, (state, action) => {
        state.status = "successed";
        state.dayOffList = action.payload;
      })
      .addCase(getDayOffList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default dayOffSlice.reducer;
