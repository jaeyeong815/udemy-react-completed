import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../store/toggleSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartItems = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const toggleHandle = () => {
    dispatch(toggleCart());
  };
  return (
    <button className={classes.button} onClick={toggleHandle}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default CartButton;
