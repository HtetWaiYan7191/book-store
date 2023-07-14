import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  value: [],
  error: '',
};

const API_KEY = 'vWgjKLMr5FwPZVoXoUnx';
// veK2RENLNDrvP6ac4WVX
const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`;

export const fetchBook = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(URL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const addNewBookToApi = createAsyncThunk('books/addNewBook', async (newBook) => {
  const response = await axios.post(URL, newBook);
  return { newBook, response };
});

export const removeBookFromApi = createAsyncThunk('books/removeBook', async (bookId) => {
  console.log(bookId);
  const response = await axios.delete(`${URL}/${bookId.item_id}`, bookId);
  console.log(response.data);
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
      const data = Object.values(action.payload).map((item, id) => ({
        author: item[0].author,
        category: item[0].category,
        title: item[0].title,
        item_id: id,
      }));
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
      state.error = action.payload.message;
      state.value = [];
    });
    builder.addCase(removeBookFromApi.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(removeBookFromApi.fulfilled, (state, action) => {
      state.loading = false;
      const bookIdToRemove = action.payload.bookId.item_id;
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
