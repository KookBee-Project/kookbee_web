import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getBootcampNameList = createAsyncThunk(
  "/class/bootcamp/namelist",
  async () => {
    const response = await api("GET", "/class/bootcamp/namelist");
    return response.data;
  }
);

const bootcampNameSlice = createSlice({
  name: "bootcampName",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBootcampNameList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getBootcampNameList.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getBootcampNameList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
      });
  },
});
export default bootcampNameSlice.reducer;
