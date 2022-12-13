import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

  width: 90%;
  max-width: 40rem;

  margin: 2rem auto;
`;

const Card = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Card;
