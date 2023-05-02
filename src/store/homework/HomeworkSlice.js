import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  detailData: [],
  answerDetailData: {},
  status: "idle",
  writeStatus: "idle",
  updateStatus: "idle",
  error: null,
};

export const getHomeworkList = createAsyncThunk(
  "/homework/list",
  async (bootcampId) => {
    const response = await api(
      "GET",
      `/class/homework/student/list/${bootcampId}`
    );
    return response.data;
  }
);
export const getHomeworkDetail = createAsyncThunk(
  "/homework/detail",
  async (homeworkId) => {
    const response = await api(
      "GET",
      `/class/homework/student/detail/${homeworkId}`
    );
    return response.data;
  }
);

export const postHomeworkAnswer = createAsyncThunk(
  "/homework/write",
  async (request) => {
    const response = await api("POST", "/class/homework/answer", request);
    return response.data;
  }
);

export const getHomeworkAnswerDetail = createAsyncThunk(
  "/homework/answer/detail",
  async (homeworkAnswerId) => {
    const response = await api(
      "GET",
      `/class/homework/answer/detail/${homeworkAnswerId}`
    );
    return response.data;
  }
);

export const updateHomeworkAnswer = createAsyncThunk(
  "/homework/answer/update",
  async (request) => {
    const response = await api("PUT", "/class/homework/answer/edit", request);
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
      })
      .addCase(getHomeworkDetail.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getHomeworkDetail.fulfilled, (state, action) => {
        state.status = "successed";
        state.detailData = action.payload;
      })
      .addCase(getHomeworkDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(postHomeworkAnswer.pending, (state, action) => {
        state.writeStatus = "loading";
      })
      .addCase(postHomeworkAnswer.fulfilled, (state, action) => {
        state.writeStatus = "successed";
      })
      .addCase(postHomeworkAnswer.rejected, (state, action) => {
        state.writeStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(getHomeworkAnswerDetail.pending, (state, action) => {})
      .addCase(getHomeworkAnswerDetail.fulfilled, (state, action) => {
        state.answerDetailData = action.payload;
      })
      .addCase(getHomeworkAnswerDetail.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateHomeworkAnswer.pending, (state, action) => {
        state.updateStatus = "loading";
      })
      .addCase(updateHomeworkAnswer.fulfilled, (state, action) => {
        state.updateStatus = "successed";
        state.answerDetailData = action.payload;
      })
      .addCase(updateHomeworkAnswer.rejected, (state, action) => {
        state.updateStatus = "failed";
        state.error = action.error.message;
      });
  },
});
export default homeworkSlice.reducer;
