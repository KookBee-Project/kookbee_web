import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const studentSignUp = createAsyncThunk("/user/signup", async (users) => {
  const response = await api("POST", "/user/signup", users);
  return response.data;
});

const studentSignUpSlice = createSlice({
  name: "studentSignUp",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(studentSignUp.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(studentSignUp.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(studentSignUp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default studentSignUpSlice.reducer;
