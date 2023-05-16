import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../api/api";

const initialState = {
  data: [],
  status: "idle",
  WriteStatus: "idle",
  studyRegisterStatus: "idle",
  error: null,
  totalPages: null,
  studyJoin: "",
  responseList: [],
  postList: [],
  studyPost: {},
  postCommentList: [],
  registerStatus: "idle",
  reviewStatus: "idle",
};

export const studyRegister = createAsyncThunk(
  "/portfolio/study/register",
  async (request, thunkAPI) => {
    try {
      const response = await api("POST", "/portfolio/study/register", request);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

export const getPage = createAsyncThunk(
  "/portfolio/study/findstudy?${page}",
  async (page) => {
    const response = await api(
      "GET",
      `/portfolio/study/findstudy?page=${Number(page)}`
    );
    return response.data;
  }
);

export const studyMain = createAsyncThunk("/portfolio/study", async (page) => {
  const response = await api("GET", `/portfolio/study?page=${Number(page)}`);
  return response.data;
});

export const lectureRegister = createAsyncThunk(
  "/portfolio/study/${groupStudyId}/lecture/register",
  async ({ groupStudyId, request }) => {
    const response = await api(
      "POST",
      `/portfolio/study/${groupStudyId}/lecture/register`,
      request
    );
    return response.data;
  }
);

export const getStudyAndLectureList = createAsyncThunk(
  "portfolio/study/{studyId}",
  async (groupStudyId) => {
    const response = await api("GET", `/portfolio/study/${groupStudyId}`);
    return response.data;
  }
);

export const getPostList = createAsyncThunk(
  "/portfolio/study/{studyId}/lecture/{lectureId}",
  async (lectureID) => {
    const response = await api(
      "GET",
      `/portfolio/study/{studyId}/lecture/${lectureID}`
    );
    return response.data;
  }
);

export const registerGroupStudyPost = createAsyncThunk(
  "/portfolio/study/${studyId}/lecture/${lectureId}/post/register",
  async ({ lectureId, request }) => {
    const response = await api(
      "POST",
      `/portfolio/study/{studyId}/lecture/${lectureId}/post/register`,
      request
    );
    return response.data;
  }
);

export const getPostCommentList = createAsyncThunk(
  "/{studyId}/lecture/{lectureId}",
  async (lectureId) => {
    const response = await api(
      "GET",
      `/portfolio/study/{studyId}/lecture/${lectureId}`
    );
    return response.data;
  }
);

export const registerGroupStudyReview = createAsyncThunk(
  "/{studyId}/lecture/{lectureId}/post/{postId}/review/register",
  async ({ postId, request }) => {
    const response = await api(
      "POST",
      `/portfolio/study/{studyId}/lecture/{lectureId}/post/${postId}/review/register`,
      request
    );
    return response.data;
  }
);

const studySlice = createSlice({
  name: "study",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(studyRegister.pending, (state, action) => {
        state.studyRegisterStatus = "loading";
      })
      .addCase(studyRegister.fulfilled, (state, action) => {
        state.studyRegisterStatus = "successed";
        state.studyPost = action.payload;
      })
      .addCase(studyRegister.rejected, (state, action) => {
        state.studyRegisterStatus = "failed";
        state.error = action.payload.data;
      })
      .addCase(getPage.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getPage.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = [...state.data, ...action.payload.content];
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getPage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
      })
      .addCase(studyMain.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(studyMain.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = [...state.data, ...action.payload.content];
        state.totalPages = action.payload.totalPages;
      })
      .addCase(studyMain.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
      })
      .addCase(lectureRegister.pending, (state, action) => {
        state.WriteStatus = "loading";
      })
      .addCase(lectureRegister.fulfilled, (state, action) => {
        state.WriteStatus = "successed";
      })
      .addCase(lectureRegister.rejected, (state, action) => {
        state.WriteStatus = "failed";
        state.error = action.payload.data;
      })
      .addCase(getStudyAndLectureList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getStudyAndLectureList.fulfilled, (state, action) => {
        state.status = "successed";
        state.studyJoin = action.payload.studyJoin;
        state.responseList = action.payload.responseList;
      })
      .addCase(getStudyAndLectureList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
      })
      .addCase(getPostList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getPostList.fulfilled, (state, action) => {
        state.status = "successed";
        state.postList = action.payload;
      })
      .addCase(getPostList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
      })
      .addCase(registerGroupStudyPost.pending, (state, action) => {
        state.registerStatus = "loading";
      })
      .addCase(registerGroupStudyPost.fulfilled, (state, action) => {
        state.registerStatus = "successed";
        state.data = action.payload.data;
      })
      .addCase(registerGroupStudyPost.rejected, (state, action) => {
        state.registerStatus = "failed";
        state.error = action.payload.data;
      })
      .addCase(getPostCommentList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getPostCommentList.fulfilled, (state, action) => {
        state.status = "successed";
        state.postCommentList = action.payload;
      })
      .addCase(getPostCommentList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
      })
      .addCase(registerGroupStudyReview.pending, (state, action) => {
        state.reviewStatus = "loading";
      })
      .addCase(registerGroupStudyReview.fulfilled, (state, action) => {
        state.reviewStatus = "successed";
        state.data = action.payload.data;
      })
      .addCase(registerGroupStudyReview.rejected, (state, action) => {
        state.reviewStatus = "failed";
        state.error = action.payload.data;
      });
  },
});
export default studySlice.reducer;
