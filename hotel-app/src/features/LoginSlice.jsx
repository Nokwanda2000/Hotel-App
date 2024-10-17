import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userAPI } from './UserAPI'; // Assuming you have a UserAPI for handling user login requests

// Create the async thunk for user login
export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (loginData, thunkAPI) => {
    try {
      const response = await userAPI.login(loginData); // API call for logging in
      return response.data; // Returns user data on successful login
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data); // Handle error
    }
  }
);

const initialState = {
  user: null, // Store logged in user data
  status: 'idle', // idle | loading | succeeded | failed
  error: null, // Store any errors that occur during the login process
};

// Create the login slice
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // You can add additional synchronous reducers here if needed
    logoutUser: (state) => {
      state.user = null; // Clear user data on logout
      state.status = 'idle'; // Reset status to idle
      state.error = null; // Clear any errors
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading'; // Set loading status while the login request is in progress
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Set status to succeeded when login succeeds
        state.user = action.payload; // Store user data (token, user info, etc.)
        state.error = null; // Clear any existing errors
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed'; // Set status to failed if login fails
        state.error = action.payload || 'Login failed'; // Store error message
      });
  },
});

// Action creators are generated for each case reducer function
export const { logoutUser } = loginSlice.actions;

// Export the async thunk and the reducer
export default loginSlice.reducer;
