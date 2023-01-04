import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    toggle: false,
    notification: null,
  },
  reducers: {
    toggleCart: (state) => {
      state.toggle = !state.toggle;
    },

    showNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const { toggleCart, showNotification } = uiSlice.actions;

export default uiSlice.reducer;
