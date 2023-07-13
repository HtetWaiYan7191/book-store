import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      id: 'item1',
      title: 'The Great Gasby',
      author: 'John Smith',
      category: 'Fiction',
    },

    {
      id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },

    {
      id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, action) => {
      state.value.push(action.payload);
    },

    deleteBooks: (state, action) => {
      state.value = state.value.filter((prev) => prev.id !== action.payload);
    },
  },
});

export const { addBooks, deleteBooks } = booksSlice.actions;
export default booksSlice.reducer;
