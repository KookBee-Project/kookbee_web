import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  selectData: undefined,
  status: "idle",
  sideSet: false,
  error: null,
};

export const getBootcampNameList = createAsyncThunk(
  "/class/bootcamp/namelist",
  async () => {
    const response = await api("GET", "/class/bootcamp/namelist");
    return response.data;
  }
);

const bootcampNameSlice = createSlice({
  name: "bootcampName",
  initialState,
  reducers: {
    setData: (state, action) => {
      console.log(action.payload);
      state.selectData = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getBootcampNameList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getBootcampNameList.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
        if (state.data.length != 0) {
          state.sideSet = true;
          state.selectData = state.data[0].bootcampId;
        }
      })
      .addCase(getBootcampNameList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { setData } = bootcampNameSlice.actions;
export default bootcampNameSlice.reducer;
