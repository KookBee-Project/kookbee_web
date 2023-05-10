import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
  totalPages: null,
};

export const getPage = createAsyncThunk(
  "/portfolio/study/findstudy?${page}",
  async (page) => {
    const response = await api(
      "GET",
      `/portfolio/study/findstudy?page=${Number(page)}`
    );
    return response.data;
  }
);

export const studyMain = createAsyncThunk("/portfolio/study", async (page) => {
  const response = await api("GET", `/portfolio/study?page=${Number(page)}`);
  return response.data;
});

const pageSlice = createSlice({
  name: "page",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getPage.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getPage.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = [...state.data, ...action.payload.content];
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getPage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
      })
      .addCase(studyMain.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(studyMain.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = [...state.data, ...action.payload.content];
        state.totalPages = action.payload.totalPages;
      })
      .addCase(studyMain.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
      });
  },
});
export default pageSlice.reducer;
