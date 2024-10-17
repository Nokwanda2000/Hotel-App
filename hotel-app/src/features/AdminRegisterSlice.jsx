
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AdminAPI from './AdminAPI'

// Create the async thunk for admin registration
export const registerAdmin = createAsyncThunk(
  'register/registerAdmin',
  async (userData, thunkAPI) => {
    const response = await AdminAPI.register(userData);
    return response.data; 
  }
);

const initialState = {
  user: null,
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
};

// Create the slice
const AdminregisterSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAdmin.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerAdmin.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload; // Store user data if needed
      })
      .addCase(registerAdmin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the async thunk and the reducer

export default AdminregisterSlice.reducer; 
