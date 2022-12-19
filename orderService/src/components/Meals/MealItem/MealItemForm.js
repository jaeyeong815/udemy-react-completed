import styled from 'styled-components';
import Input from '../../UI/Input';

const MealItemForm = ({ id }) => {
  return (
    <StForm>
      <Input
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
  :hover,
  :active {
    background-color: #641e03;
    border-color: #641e03;
  }
`;
