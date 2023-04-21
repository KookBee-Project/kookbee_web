import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ErrorResponse } from "@remix-run/router";
import { api} from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const applyDayOff = createAsyncThunk(
  "/dayoff/apply",
  async (request, thunkAPI) => {
    try {
      const response = await api("POST", "/class/dayoff/apply", request);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

export const getBootcampList = createAsyncThunk(
  "/dayoff/bootcampList",
  async (request, thunkAPI) => {
    try {
      const response = await api("GET", "/class/dayoff/bootcamplist");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

// export const updateCurriculum = createAsyncThunk(
//   "/curriculum/update",
//   async (request) => {
//     const response = await api("PUT", "/curriculum", request);
//     return response.data;
//   }
// );

// export const readCurriculum = createAsyncThunk(
//   "/curriculum/read",
//   async (classId) => {
//     const response = await api("GET", `/curriculum/${classId}`);
//     return response.data;
//   }
// );

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
        state.data = action.payload;
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
        state.data = action.payload;
      })
      .addCase(getBootcampList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    //   .addCase(updateCurriculum.pending, (state, action) => {
    //     state.status = "loading";
    //   })
    //   .addCase(updateCurriculum.fulfilled, (state, action) => {
    //     state.status = "successed";
    //     state.data = action.payload;
    //   })
    //   .addCase(updateCurriculum.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.error.message;
    //   })
  },
});
export default dayOffSlice.reducer;
