import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: {},
  userId: 0,
  userName: "",
  status: "idle",
  status1: "idle",
  error: null,
  error1: null,
  userInfo: {},
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

export const findUser = createAsyncThunk(
  "/user/portfolio/suty/finduser",
  async (userEmail, thunkAPI) => {
    try {
      const response = await api("POST", "/user/portfolio/study/finduser", {
        userEmail,
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = initialState.data;
      state.status = initialState.status;
      state.error = initialState.error;
      state.userId = initialState.userId;
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
        state.userId = action.payload.userId;
        state.userName = action.payload.userName;
        state.data = action.payload;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
      })
      .addCase(findUser.pending, (state, action) => {
        state.status1 = "loading";
      })
      .addCase(findUser.fulfilled, (state, action) => {
        state.status1 = "successed";
        state.userInfo = action.payload;
      })
      .addCase(findUser.rejected, (state, action) => {
        state.status1 = "failed";
        state.error1 = action.payload.data;
      });
  },
});
export default userSlice.reducer;
export const { logout } = userSlice.actions;
