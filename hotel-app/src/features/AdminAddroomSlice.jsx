
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const initialState = {
  rooms: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Async thunk for adding a room
export const addRoom = createAsyncThunk('rooms/addRoom', async (roomData) => {
  try {
    const docRef = await addDoc(collection(db, 'room'), roomData); // Update collection name if necessary
    return { id: docRef.id, ...roomData }; // Return room data with the new ID
  } catch (error) {
    throw new Error(error.message);
  }
});

// Async thunk for fetching rooms
export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
  const roomsCollection = collection(db, 'rooms');
  const roomsSnapshot = await getDocs(roomsCollection);
  return roomsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Return rooms with IDs
});

// Create slice
const roomSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addRoom.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addRoom.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rooms.push(action.payload); // Add the new room to the rooms array
      })
      .addCase(addRoom.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; // Set the error message
      })
      .addCase(fetchRooms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rooms = action.payload; // Replace existing rooms with fetched rooms
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; // Set the error message
      });
  },
});

// Export actions if needed
export const { } = roomSlice.actions; 

// Export reducer
export default roomSlice.reducer;
