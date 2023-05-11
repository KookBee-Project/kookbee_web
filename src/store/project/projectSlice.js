import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  detailData: {},
  status: "idle",
  createStatus: "idle",
  startStatus: "idle",
  deleteStatus: "idle",
  error: null,
};

export const getMyProjectList = createAsyncThunk(
  "/project/my/list",
  async () => {
    const response = await api("GET", `/portfolio/project/my`);
    return response.data;
  }
);

export const getProjectList = createAsyncThunk(
  "/project/list",
  async (bootcampId) => {
    const response = await api("GET", `/portfolio/project/${bootcampId}`);
    return response.data;
  }
);

export const getMyProjectDetail = createAsyncThunk(
  "/project/detail",
  async (projectId) => {
    const response = await api("GET", `/portfolio/project/detail/${projectId}`);
    return response.data;
  }
);

export const createProject = createAsyncThunk(
  "/project/create",
  async ({ bootcampId, request }) => {
    const response = await api(
      "POST",
      `/portfolio/project/${bootcampId}`,
      request
    );
    return response.data;
  }
);
export const editProject = createAsyncThunk(
  "/project/edit",
  async ({ projectId, request }) => {
    const response = await api(
      "PUT",
      `/portfolio/project/detail/${projectId}`,
      request
    );
    return response.data;
  }
);

export const startProject = createAsyncThunk(
  "/project/start",
  async (projectId) => {
    const response = await api("PUT", `/portfolio/project/start/${projectId}`);
    return response.data;
  }
);

export const deleteProject = createAsyncThunk(
  "/project/delete",
  async (projectId) => {
    const response = await api(
      "DELETE",
      `/portfolio/project/detail/${projectId}`
    );
    return response.data;
  }
);
export const submitProject = createAsyncThunk(
  "/project/submit",
  async ({ projectId, submit }) => {
    const response = await api(
      "PUT",
      `/portfolio/project/submit/${projectId}`,
      submit
    );
    return response.data;
  }
);

export const joinProject = createAsyncThunk(
  "/project/join",
  async (request, thunkAPI) => {
    try {
      const response = await api("POST", "/portfolio/project/user", request);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setStatusInit: (state) => {
      state.status = "idle";
      state.createStatus = "idle";
      state.startStatus = "idle";
      state.deleteStatus = "idle";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMyProjectList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getMyProjectList.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getMyProjectList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getProjectList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProjectList.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getProjectList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createProject.pending, (state, action) => {
        state.createStatus = "loading";
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.createStatus = "successed";
      })
      .addCase(createProject.rejected, (state, action) => {
        state.createStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(getMyProjectDetail.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getMyProjectDetail.fulfilled, (state, action) => {
        state.status = "successed";
        state.detailData = action.payload;
      })
      .addCase(getMyProjectDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(editProject.pending, (state, action) => {
        state.createStatus = "loading";
      })
      .addCase(editProject.fulfilled, (state, action) => {
        state.createStatus = "successed";
      })
      .addCase(editProject.rejected, (state, action) => {
        state.createStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(startProject.pending, (state, action) => {
        state.startStatus = "loading";
      })
      .addCase(startProject.fulfilled, (state, action) => {
        state.startStatus = "successed";
      })
      .addCase(startProject.rejected, (state, action) => {
        state.startStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteProject.pending, (state, action) => {
        state.deleteStatus = "loading";
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.deleteStatus = "successed";
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.deleteStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(submitProject.pending, (state, action) => {
        state.createStatus = "loading";
      })
      .addCase(submitProject.fulfilled, (state, action) => {
        state.createStatus = "successed";
      })
      .addCase(submitProject.rejected, (state, action) => {
        state.createStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(joinProject.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(joinProject.fulfilled, (state, action) => {
        state.status = "successed";
      })
      .addCase(joinProject.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
      });
  },
});
export const { setStatusInit } = projectSlice.actions;
export default projectSlice.reducer;
