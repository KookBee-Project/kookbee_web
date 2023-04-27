import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  detailData: {},
  status: "idle",
  delStatus: "idle",
  detailStatus: "idle",
  sideSet: false,
  error: null,
};

export const addBootcamp = createAsyncThunk(
  "/bootcamp/add",
  async (bootcampCode, thunkAPI) => {
    console.log(bootcampCode);
    try {
      const response = await api("POST", "/class/bootcamp/student", {
        bootcampCode,
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

export const readBootcampList = createAsyncThunk(
  "/bootcamp/read/list",
  async () => {
    const response = await api("GET", "/class/bootcamp/student");
    return response.data;
  }
);

export const readBootcampDetail = createAsyncThunk(
  "/bootcamp/read/detail",
  async (bootcampId) => {
    const response = await api("GET", `/class/bootcamp/${bootcampId}`);
    return response.data;
  }
);

const bootcampSlice = createSlice({
  name: "bootcamp",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addBootcamp.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addBootcamp.fulfilled, (state, action) => {
        state.status = "successed";
      })
      .addCase(addBootcamp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
        console.log(action.payload);
      })
      .addCase(readBootcampList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(readBootcampList.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
        if (action.payload.length !== 0) state.sideSet = true;
      })
      .addCase(readBootcampList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(readBootcampDetail.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(readBootcampDetail.fulfilled, (state, action) => {
        state.status = "successed";
        state.detailData = action.payload;
      })
      .addCase(readBootcampDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default bootcampSlice.reducer;
