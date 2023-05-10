import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
  applyList: [],
  requestApplyList: [],
};

export const applyGroupStudy = createAsyncThunk(
  "/portfolio/study/{studyId}/apply",
  async ({ studyId, request }) => {
    const response = await api(
      "POST",
      `/portfolio/study/${studyId}/apply`,
      request
    );
    return response.data;
  }
);

export const getStudyApplyList = createAsyncThunk(
  "/portfolio/study/apply",
  async () => {
    const response = await api("GET", "/portfolio/study/apply");
    return response.data;
  }
);

export const putStudyApply = createAsyncThunk(
  "/portfolio/study/apply/{applyId}",
  async ({ applyId, request }) => {
    const response = await api(
      "PUT",
      `/portfolio/study/apply/${applyId}`,
      request
    );
    return response.data;
  }
);

export const getRequestApplyList = createAsyncThunk(
  "/portfolio/study/apply/requested",
  async () => {
    console.log("여기까지 들어옴")
    const response = await api("GET", "/portfolio/study/apply/requested");
    return response.data;
  }
);

const applySlice = createSlice({
  name: "apply",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(applyGroupStudy.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(applyGroupStudy.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(applyGroupStudy.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
      })
      .addCase(getStudyApplyList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getStudyApplyList.fulfilled, (state, action) => {
        state.status = "successed";
        state.applyList = action.payload;
      })
      .addCase(getStudyApplyList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
      })
      .addCase(putStudyApply.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(putStudyApply.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload.data;
      })
      .addCase(putStudyApply.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
      })
      .addCase(getRequestApplyList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getRequestApplyList.fulfilled, (state, action) => {
        state.status = "successed";
        state.requestApplyList = action.payload;
      })
      .addCase(getRequestApplyList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
      });
  },
});
export default applySlice.reducer;
