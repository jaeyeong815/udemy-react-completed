import { useReducer } from 'react';
import CartContext from './CartContext';

const ADD = 'add';
const REMOVE = 'remove';

const initCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === ADD) {
    const existenceItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
    const existenceItem = state.items[existenceItemIndex];

    let updatedItems;

    if (existenceItem) {
      const updatedItem = {
        ...existenceItem,
        amount: existenceItem.amount + action.payload.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existenceItemIndex] = updatedItem;
    } else {
      updatedItems = [...state.items, action.payload];
    }

    const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === REMOVE) {
    const existenceItemIndex = state.items.findIndex((item) => item.id === action.payload);
    const existenceItem = state.items[existenceItemIndex];

    let updatedItems;

    if (existenceItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.payload);
    } else {
      const updatedItem = {
        ...existenceItem,
        amount: existenceItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existenceItemIndex] = updatedItem;
    }

    const updatedTotalAmount = state.totalAmount - existenceItem.price;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return initCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initCartState);

  const addCartItem = (item) => {
    cartDispatch({ type: ADD, payload: item });
  };
  const removeCartItem = (id) => {
    cartDispatch({ type: REMOVE, payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addCartItem,
    removeItem: removeCartItem,
  };

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;
