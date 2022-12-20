import { useContext, useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import CartContext from '../../store/CartContext';
import CartIcon from './CartIcon';

const HeaderCartBtn = ({ onClick }) => {
  const [cartIsHighlighted, setCartIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }

    setCartIsHighlighted(true);
    const timer = setTimeout(() => {
      setCartIsHighlighted(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [cartCtx.items]);

  const numberOfCartItem = cartCtx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  return (
    <StButton onClick={onClick} isHighlighted={cartIsHighlighted}>
      <Icon>
        <CartIcon />
      </Icon>
      <span>you'r cart</span>
      <Badge>{numberOfCartItem}</Badge>
    </StButton>
  );
};

export default HeaderCartBtn;

const Bump = keyframes`
0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;

const StButton = styled.div`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;
  :hover,
  :active {
    background-color: #2c0d00;
  }

  ${(props) =>
    props.isHighlighted === true &&
    css`
      animation: ${Bump} 300ms ease-out;
    `}
`;

const Icon = styled.span`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`;

const Badge = styled.span`
  background-color: #b94517;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
  :hover,
  :active {
    background-color: #92320c;
  }
`;
