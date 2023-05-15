import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getHomeStudy = createAsyncThunk("/home/study", async () => {
  const response = await api("GET", "/portfolio/study/home/list");
  return response.data;
});

const homeStudySlice = createSlice({
  name: "homeStudy",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getHomeStudy.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getHomeStudy.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getHomeStudy.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default homeStudySlice.reducer;
