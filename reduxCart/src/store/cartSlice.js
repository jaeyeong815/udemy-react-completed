import { createSlice } from '@reduxjs/toolkit';
import { showNotification } from './uiSlice';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity += 1;
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
      if (existingItem.quantity === 1) {
        const filterd = state.items.filter((item) => item.id !== removeItemId);
        state.items = filterd;
        return;
      }
      existingItem.quantity -= 1;
      existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
    },
  },
});

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: 'pending',
        title: '보내는 중...',
        message: '장바구니 데이터를 보내고 있습니다!',
      }),
    );

    const sendRequest = async () => {
      const response = await fetch('https://react-http-cc64a-default-rtdb.firebaseio.com/cart.json', {
        method: 'POST',
        body: JSON.stringify(cartData),
      });
      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();
      dispatch(
        showNotification({
          status: 'success',
          title: '성공!',
          message: '성공적으로 장바구니에 담았습니다.',
        }),
      );
    } catch (err) {
      dispatch(
        showNotification({
          status: 'error',
          title: '오류 발생!',
          message: '장바구니에 담는 도중 요류가 발생했어요.',
        }),
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
