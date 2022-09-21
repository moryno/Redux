import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userReducer = createAsyncThunk("users/update", async (user) => {
  const { data } = await axios.post(
    "http://localhost:8800/api/users/123/update",
    user
  );
  return data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "Maurice",
      email: "mauricenganga41@gmail.com",
    },
    pending: false,
    error: false,
  },
  extraReducers: {
    [userReducer.pending]: (state) => {
      state.pending = true;
    },
    [userReducer.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    [userReducer.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
  // reducers: {
  //   updateStart: (state) => {
  //     state.pending = true;
  //   },
  //   updateSuccess: (state, action) => {
  //     state.pending = false;
  //     state.userInfo = action.payload;
  //   },
  //   updateFailure: (state) => {
  //     state.pending = false;
  //     state.error = true;
  //   },
  // },
});

export const { updateStart, updateSuccess, updateFailure } = userSlice.actions;
export default userSlice.reducer;
