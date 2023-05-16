import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
  restaurantList: [],
  campusInfo: {},
  postList: [],
  counts: 0,
  postStatus: "idle",
  errorMessage: null,
  participateStatus: "idle",
};

export const postRestaurant = createAsyncThunk(
  "/class/eatingtogether/postrestaurant",
  async (request) => {
    const response = await api(
      "POST",
      "/class/eatingtogether/postrestaurant",
      request
    );
    return response.data;
  }
);

export const getRestaurant = createAsyncThunk(
  "/class/eatingtogether/getrestaurant",
  async () => {
    const response = await api("GET", "/class/eatingtogether/getrestaurant");
    return response.data;
  }
);

export const getCampusInfo = createAsyncThunk(
  "/class/bootcamp/eatingtogether/getrestaurant/{bootcampId}",
  async (bootcampId) => {
    const response = await api(
      "GET",
      `/class/bootcamp/eatingtogether/getrestaurant/${bootcampId}`
    );
    return response.data;
  }
);

export const postWrite = createAsyncThunk(
  "/class/eatingtogether",
  async (request) => {
    console.log(request);
    const response = await api("POST", "/class/eatingtogether", request);
    return response.data;
  }
);

export const getPost = createAsyncThunk(
  "/class/eatingtogether/{bootcampId}",
  async (bootcampId) => {
    const response = await api("GET", `/class/eatingtogether/${bootcampId}`);
    return response.data;
  }
);

export const participate = createAsyncThunk(
  "/class/eatingtogether/participate/{eatingTogetherId}",
  async (request, thunkAPI) => {
    try {
      const response = await api(
        "POST",
        "/class/eatingtogether/participate",
        request
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

const EatingTogetherSlice = createSlice({
  name: "eatingTogether",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(postRestaurant.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(postRestaurant.fulfilled, (state, action) => {
        state.status = "successed";
      })
      .addCase(postRestaurant.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getRestaurant.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getRestaurant.fulfilled, (state, action) => {
        state.status = "successed";
        state.restaurantList = action.payload;
      })
      .addCase(getRestaurant.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getCampusInfo.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCampusInfo.fulfilled, (state, action) => {
        state.status = "successed";
        state.campusInfo = action.payload;
      })
      .addCase(getCampusInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(postWrite.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(postWrite.fulfilled, (state, action) => {
        state.postStatus = "successed";
      })
      .addCase(postWrite.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getPost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.status = "successed";
        state.postList = action.payload;
      })
      .addCase(getPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(participate.pending, (state, action) => {
        state.participateStatus = "loading";
      })
      .addCase(participate.fulfilled, (state, action) => {
        state.participateStatus = "successed";
        state.data = action.payload.data;
      })
      .addCase(participate.rejected, (state, action) => {
        state.participateStatus = "failed";
        state.errorMessage = action.payload.data;
      });
  },
});
export default EatingTogetherSlice.reducer;
