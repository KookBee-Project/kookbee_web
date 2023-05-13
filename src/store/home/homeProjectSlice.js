import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getHomeProject = createAsyncThunk("/home/project", async () => {
  const response = await api("GET", "/portfolio/project/home/list");
  return response.data;
});

const homeProjectSlice = createSlice({
  name: "projectStudy",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getHomeProject.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getHomeProject.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getHomeProject.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default homeProjectSlice.reducer;
