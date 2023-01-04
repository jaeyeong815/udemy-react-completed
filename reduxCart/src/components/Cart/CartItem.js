import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { name, quantity, totalPrice, price, id } = props.item;
  const minusQuantity = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  const plusQuantity = () => {
    dispatch(cartActions.addItemToCart({ name, quantity, totalPrice, price, id }));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minusQuantity}>-</button>
          <button onClick={plusQuantity}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
