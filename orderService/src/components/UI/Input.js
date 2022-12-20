import { forwardRef } from 'react';
import styled from 'styled-components';

const Input = forwardRef(({ label, input }, ref) => {
  return (
    <Container>
      <StLabel htmlFor={input.id}>{label}</StLabel>
      <StInput ref={ref} {...input} />
    </Container>
  );
});

export default Input;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const StLabel = styled.label`
  font-weight: bold;
  margin-right: 1rem;
`;

const StInput = styled.input`
  width: 3rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font: inherit;
  padding-left: 0.5rem;
`;
