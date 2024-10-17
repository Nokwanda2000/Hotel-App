
import { createSlice } from '@reduxjs/toolkit';

const adminLoginSlice = createSlice({
  name: 'adminLogin',
  initialState: {
    isLoggedIn: false,
    user: null,
    error: null,
  },
  reducers: {
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure(state, action) {
      state.error = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = adminLoginSlice.actions;
export default adminLoginSlice.reducer;
