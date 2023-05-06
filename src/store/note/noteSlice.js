import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  curriculum: [],
  status: "idle",
  error: null,
};

export const getNoteCurriculumList = createAsyncThunk(
  "/note/curriculum",
  async () => {
    const response = await api("GET", "/portfolio/note");
    return response.data;
  }
);

const noteSlice = createSlice({
  name: "note",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getNoteCurriculumList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getNoteCurriculumList.fulfilled, (state, action) => {
        state.status = "successed";
        state.curriculum = action.payload;
      })
      .addCase(getNoteCurriculumList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default noteSlice.reducer;
