import CartContext from './cartContext';

const CartProvider = ({ children }) => {
  const addCartItem = () => {};
  const removeCartItem = () => {};

  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: addCartItem,
    removeItem: removeCartItem,
  };

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;
