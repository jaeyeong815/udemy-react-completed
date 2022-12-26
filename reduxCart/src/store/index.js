import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from './toggleSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    cart: cartReducer,
  },
});

export default store;
