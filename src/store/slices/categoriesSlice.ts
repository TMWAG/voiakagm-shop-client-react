import { createSlice } from '@reduxjs/toolkit';

interface ICategories {
  id: number;
  name: string;
  picture: string;
}

export const categoriesSlice = createSlice({
  name: 'categoriesState',
  initialState: {
    categories: [] as ICategories[],
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
