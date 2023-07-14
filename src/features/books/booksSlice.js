import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  value: [],
  error: '',
};

const API_KEY = 'M1I2XyD53f719RBIn1Bm';
const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`;

export const fetchBook = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(URL);
  return response.data;
});

export const addNewBookToApi = createAsyncThunk('books/addNewBook', async (newBook) => {
  const response = await axios.post(URL, newBook);
  return { newBook, response };
});

export const removeBookFromApi = createAsyncThunk('books/removeBook', async (bookId) => {
  const response = await axios.delete(`${URL}/${bookId}`, bookId);
  return { bookId, response: response.data };
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.loading = false;
      const data = Object.keys(action.payload).map((item) => {
        const book = {};
        book.author = action.payload[item][0].author;
        book.category = action.payload[item][0].category;
        book.title = action.payload[item][0].title;
        book.item_id = item;
        return book;
      });
      state.value = data;
      state.error = '';
    });

    builder.addCase(fetchBook.rejected, (state, action) => {
      state.loading = false;
      state.value = [];
      state.error = action.error.message;
    });

    builder.addCase(addNewBookToApi.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addNewBookToApi.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.value.push(action.payload.newBook);
    });
    builder.addCase(addNewBookToApi.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
      state.value = [];
    });
    builder.addCase(removeBookFromApi.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(removeBookFromApi.fulfilled, (state, action) => {
      state.loading = false;
      const bookIdToRemove = action.payload.bookId;
      state.value = state.value.filter((currentBook) => currentBook.item_id !== bookIdToRemove);
      state.error = '';
    });

    builder.addCase(removeBookFromApi.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload.message;
    });
  },
});

export const { addBooks, deleteBooks } = booksSlice.actions;
export default booksSlice.reducer;
