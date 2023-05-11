import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getCurriculum = createAsyncThunk(
  "/curriculum/read",
  async (bootcampId) => {
    const response = await api(
      "GET",
      `/class/curriculum/student/${bootcampId}`
    );
    return response.data;
  }
);

const curriculumSlice = createSlice({
  name: "curriculum",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCurriculum.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCurriculum.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getCurriculum.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default curriculumSlice.reducer;
