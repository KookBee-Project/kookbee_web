import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: {},
  status: "idle",
  error: null,
};

export const login = createAsyncThunk("/user/login", async (user, thunkAPI) => {
  try {
    const response = await api("POST", "/user/login", user);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response);
  }
});

export const getMe = createAsyncThunk("/user", async () => {
    const response = await api("GET", "/user");
    return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = initialState.data;
      state.status = initialState.status;
      state.error = initialState.error;
      localStorage.clear();
      alert("정상적으로 로그아웃 되었습니다.");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
        localStorage.setItem("RefreshToken", action.payload.refreshToken);
        localStorage.setItem("AccessToken", action.payload.accessToken);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
      })
      .addCase(getMe.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
      });
  },
});
export default userSlice.reducer;
export const { logout } = userSlice.actions;
