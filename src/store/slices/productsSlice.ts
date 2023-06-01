import { createSlice } from '@reduxjs/toolkit';

interface IProduct {
  amount: number | null;
  category: { name: string };
  categoryId: number;
  description: string;
  discount: number | null;
  id: number;
  name: string;
  pictures: Array<{ filename: string }>;
  price: number;
  sold: number;
  used: boolean;
  vendor: { name: string };
  vendorId: number;
}

export const productsSlice = createSlice({
  name: 'productsState',
  initialState: {
    products: [] as IProduct[],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
