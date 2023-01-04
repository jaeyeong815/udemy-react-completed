import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity += 1;
      state.changed = true;
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        return;
      }
      state.items.push({
        id: newItem.id,
        price: newItem.price,
        quantity: 1,
        totalPrice: newItem.price,
        name: newItem.title,
      });
    },
    removeItemFromCart: (state, action) => {
      const removeItemId = action.payload;
      const existingItem = state.items.find((item) => item.id === removeItemId);
      state.totalQuantity -= 1;
      state.changed = true;
      if (existingItem.quantity === 1) {
        const filterd = state.items.filter((item) => item.id !== removeItemId);
        state.items = filterd;
        return;
      }
      existingItem.quantity -= 1;
      existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
    },
    replaceCart: (state, action) => {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
