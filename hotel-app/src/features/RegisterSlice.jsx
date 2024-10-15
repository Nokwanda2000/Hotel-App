// src/features/RegisterSlice.jsx
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userAPI } from './UserAPI'; 

// Create the async thunk for user registration
export const registerUser = createAsyncThunk(
  'register/registerUser',
  async (userData, thunkAPI) => {
    const response = await userAPI.register(userData);
    return response.data; 
  }
);

const initialState = {
  user: null,
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
};

// Create the slice
const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload; // Store user data if needed
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the async thunk and the reducer
// export { registerUser };
export default registerSlice.reducer; // Ensure you're exporting the reducer correctly
