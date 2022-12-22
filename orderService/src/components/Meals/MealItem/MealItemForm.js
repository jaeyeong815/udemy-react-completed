import { useRef, useState } from 'react';
import styled from 'styled-components';
import Input from '../../UI/Input';

const MealItemForm = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    const enteredAmount = Number(amountRef.current.value);

    if (enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }
    onAddToCart(enteredAmount);
  };

  return (
    <StForm onSubmit={onSubmit}>
      <Input
        ref={amountRef}
        label='Amount'
        input={{
          type: 'number',
          id: `amount + ${id}`,
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <StButton>Add</StButton>
      {!amountIsValid && <p>amount는 1이상 5이하 개수여야합니다</p>}
    </StForm>
  );
};

export default MealItemForm;

const StForm = styled.form`
  text-align: right;
`;

const StButton = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: #8a2b06;
  border: 1px solid #8a2b06;
  color: white;
  padding: 0.25rem 2rem;
  border-radius: 20px;
  font-weight: bold;
  &:hover,
  &:active {
    background-color: #641e03;
    border-color: #641e03;
  }
`;
