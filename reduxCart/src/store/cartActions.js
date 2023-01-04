import { cartActions } from './cartSlice';
import { showNotification } from './uiSlice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://react-http-cc64a-default-rtdb.firebaseio.com/cart.json');

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      const data = await response.json();

      return data;
    };

    try {
      const cart = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cart.items || [],
          totalQuantity: cart.totalQuantity,
        }),
      );
    } catch (err) {
      dispatch(
        showNotification({
          status: 'error',
          title: '오류 발생!',
          message: '장바구니를 불러오는 도중 요류가 발생했어요.',
        }),
      );
    }
  };
};
