import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { items: [], totalAmount: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      let product = { ...action.payload };
      product = { ...product, totalPrice: product.price * product.amount };

      const idExist = state.items.find((item) => item.id === product.id);

      if (!idExist) {
        state.items.push(product);
        state.totalAmount += product.totalPrice;
      } else {
        const items = state.items;
        items.map((item) => {
          if (item.id === product.id) {
            item.amount += product.amount;
            item.totalPrice += product.totalPrice;
            state.totalAmount += product.totalPrice;

            return item;
          }

          return item;
        });
      }
    },
    incrementAmount(state, action) {
      const currentItem = { ...action.payload };
      state.items.map((item) => {
        if (item.id === currentItem.id) {
          item.amount++;
          item.totalPrice += currentItem.price;
          state.totalAmount += item.price;
        }
        return item;
      });
    },
    decrementAmount(state, action) {
      const currentItem = { ...action.payload };

      const index = state.items.findIndex((item) => item.id === currentItem.id);
      const indexItem = state.items[index];

      if (indexItem.amount > 1) {
        state.items.map((item) => {
          if (item.id === currentItem.id) {
            item.amount--;
            item.totalPrice -= currentItem.price;
            state.totalAmount -= item.price;
          }
          return item;
        });
      } else {
        state.items = state.items.filter((item) => item.id !== currentItem.id);
        state.totalAmount -= currentItem.price;
      }
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const { addItem, incrementAmount, decrementAmount } = cartSlice.actions;
export default store;
