import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const onCart = () => setCartIsShown((prev) => !prev);

  return (
    <>
      {cartIsShown && <Cart onCart={onCart} />}
      <Header onCart={onCart} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
