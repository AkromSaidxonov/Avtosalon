import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: '',
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
  },
});
export const { setToken } = authSlice.actions;
export default authSlice.reducer;
