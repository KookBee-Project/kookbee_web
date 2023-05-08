import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
  totalPages: null,
};

export const studyRegist = createAsyncThunk(
  "/portfolio/study/regist",
  async (request, thunkAPI) => {
    try {
      const response = await api("POST", "/portfolio/study/regist", request);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

export const getPage = createAsyncThunk(
  "/portfolio/study/findstudy?${page}",
  async (page) => {
    console.log(typeof page);
    const response = await api(
      "GET",
      `/portfolio/study/findstudy?page=${Number(page)}`
    );
    return response.data;
  }
);

const studySlice = createSlice({
  name: "study",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(studyRegist.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(studyRegist.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(studyRegist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
      })
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
      });
  },
});
export default studySlice.reducer;
