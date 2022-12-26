import { useDispatch } from 'react-redux';
import { toggleCart } from '../../store/toggleSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleHandle = () => {
    dispatch(toggleCart());
  };
  return (
    <button className={classes.button} onClick={toggleHandle}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
