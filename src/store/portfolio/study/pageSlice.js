import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../api/api";

const initialState = {
  data: [],
  data2: [],
  status: "idle",
  status2: "idle",
  error: null,
  totalPages: null,
  mainTotalPages: "",
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
        state.status2 = "loading";
      })
      .addCase(studyMain.fulfilled, (state, action) => {
        state.status2 = "successed";
        state.data2 = [...state.data2, ...action.payload.content];
        state.mainTotalPages = action.payload.totalPages;
      })
      .addCase(studyMain.rejected, (state, action) => {
        state.status2 = "failed";
        state.error = action.payload.data;
      });
  },
});
export default pageSlice.reducer;
