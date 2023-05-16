import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  curriculum: [],
  detail: {},
  status: "idle",
  detailStatus: "idle",
  writeStatus: "idle",
  error: null,
};

export const getNoteCurriculumList = createAsyncThunk(
  "/note/curriculum",
  async () => {
    const response = await api("GET", "/portfolio/note");
    return response.data;
  }
);

export const getNoteList = createAsyncThunk(
  "/note/list",
  async (curriculumId) => {
    const response = await api("GET", `/portfolio/note/list/${curriculumId}`);
    return response.data;
  }
);

export const getNoteDetail = createAsyncThunk(
  "/note/detail",
  async (noteId) => {
    const response = await api("GET", `/portfolio/note/${noteId}`);
    return response.data;
  }
);

export const createNote = createAsyncThunk("/note/write", async (request) => {
  const response = await api("POST", "/portfolio/note", request);
  return response.data;
});

export const EditNote = createAsyncThunk("/note/edit", async (request) => {
  const response = await api("PUT", "/portfolio/note", request);
  return response.data;
});

const noteSlice = createSlice({
  name: "note",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getNoteCurriculumList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getNoteCurriculumList.fulfilled, (state, action) => {
        state.status = "successed";
        state.curriculum = action.payload;
      })
      .addCase(getNoteCurriculumList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getNoteList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getNoteList.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getNoteList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createNote.pending, (state, action) => {
        state.writeStatus = "loading";
      })
      .addCase(createNote.fulfilled, (state, action) => {
        state.writeStatus = "successed";
      })
      .addCase(createNote.rejected, (state, action) => {
        state.writeStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(getNoteDetail.pending, (state, action) => {
        state.detailStatus = "loading";
      })
      .addCase(getNoteDetail.fulfilled, (state, action) => {
        state.detailStatus = "successed";
        state.detail = action.payload;
      })
      .addCase(getNoteDetail.rejected, (state, action) => {
        state.detailStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(EditNote.pending, (state, action) => {
        state.writeStatus = "loading";
      })
      .addCase(EditNote.fulfilled, (state, action) => {
        state.writeStatus = "successed";
      })
      .addCase(EditNote.rejected, (state, action) => {
        state.writeStatus = "failed";
        state.error = action.error.message;
      });
  },
});
export default noteSlice.reducer;
