import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.value = state.value === '' ? 'Under construction' : null;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
