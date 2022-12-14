import styled from 'styled-components';

const StButton = styled.button`
  font: inherit;
  border: 1px solid #4f005f;
  background: #4f005f;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    background: #741188;
    border-color: #741188;
  }

  :focus {
    outline: none;
  }
`;

const Button = ({ content, type, onClick }) => {
  return (
    <StButton type={type || 'button'} onClick={onClick}>
      {content}
    </StButton>
  );
};

export default Button;
