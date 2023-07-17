import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      state.value = action.payload === 'Under construction' ? 'Under construction' : state.value;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
