import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: {},
  status: "idle",
  error: null,
};

export const getSelectedBootcamp = createAsyncThunk(
  "/class/bootcamp/selected",
  async (selectBootcamp) => {
    const response = await api(
      "GET",
      `/class/bootcamp/selected/${selectBootcamp}`,
    );
    return response.data;
  }
);

const selectedBootcampSlice = createSlice({
  name: "selectedBootcamp",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getSelectedBootcamp.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getSelectedBootcamp.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getSelectedBootcamp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
      });
  },
});
export default selectedBootcampSlice.reducer;
