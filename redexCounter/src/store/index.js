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

const initAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initAuthState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
