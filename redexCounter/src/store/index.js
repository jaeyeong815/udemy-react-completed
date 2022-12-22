import { createSlice, configureStore } from '@reduxjs/toolkit';

const initCounterState = {
  counter: 0,
  counterToggle: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initCounterState,
  reducers: {
    increment: (state, action) => {
      if (action.payload) {
        state.counter = state.counter + action.payload;
      } else {
        state.counter++;
      }
    },
    decrement: (state) => {
      state.counter--;
    },
    toggle: (state) => {
      state.counterToggle = !state.counterToggle;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
