import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { showNotification } from './store/uiSlice';

let isIntitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.toggle);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        showNotification({
          status: 'pending',
          title: '보내는 중...',
          message: '장바구니 데이터를 보내고 있습니다!',
        })
      );
      const response = await fetch(
        'https://react-http-cc64a-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'POST',
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      dispatch(
        showNotification({
          status: 'success',
          title: '성공!',
          message: '성공적으로 장바구니에 담았습니다.',
        })
      );
    };

    if (isIntitial) {
      isIntitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        showNotification({
          status: 'error',
          title: '오류 발생!',
          message: '장바구니에 담는 도중 요류가 발생했어요.',
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
