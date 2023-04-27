import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getHomeworkList = createAsyncThunk(
  "/dayoff/bootcampList",
  async (bootcampId) => {
    const response = await api(
      "GET",
      `/class/homework/student/list/${bootcampId}`
    );
    return response.data;
  }
);

const homeworkSlice = createSlice({
  name: "homework",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getHomeworkList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getHomeworkList.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getHomeworkList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default homeworkSlice.reducer;
