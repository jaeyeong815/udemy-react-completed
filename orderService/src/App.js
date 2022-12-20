import { useState } from 'react';
import CartProvider from './store/cartProvider';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const onCart = () => setCartIsShown((prev) => !prev);

  return (
    <CartProvider>
      {cartIsShown && <Cart onCart={onCart} />}
      <Header onCart={onCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
