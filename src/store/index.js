import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], totalAmount: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state) {},
    removeItem(state) {},
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
