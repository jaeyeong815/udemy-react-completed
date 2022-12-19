import styled from 'styled-components';

const Cart = () => {
  const cartItems = (
    <CartList>
      {[{ id: 'c1', name: 'kimbab', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </CartList>
  );
  return (
    <div>
      {cartItems}
      <TotalPrice>
        <span>Total price</span>
        <span>111.11</span>
      </TotalPrice>
      <Actions>
        <StButton>닫기</StButton>
        <StButton>주문</StButton>
      </Actions>
    </div>
  );
};

export default Cart;

const CartList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const Actions = styled.div`
  text-align: right;
  background-color: #8a2b06;
  color: white;
`;

const StButton = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #8a2b06;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;
  :hover,
  :active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }

  & .button--alt {
    color: #8a2b06;
  }
`;
