import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  value: [],
  error: '',
};

const API_KEY = 'veK2RENLNDrvP6ac4WVX';
const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`;


const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, action) => {
      state.value.push(action.payload);
    },

    deleteBooks: (state, action) => {
      state.value = state.value.filter((prev) => prev.item_id !== action.payload);
    },
  },
});

export const { addBooks, deleteBooks } = booksSlice.actions;
export default booksSlice.reducer;
