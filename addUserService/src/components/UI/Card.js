import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  border-radius: 10px;

  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;

  & form {
    display: flex;
    flex-direction: column;

    & button {
      width: 200px;
      border: none;
      background-color: purple;
      color: white;
      border-radius: 5px;
      padding: 10px 0;
    }
  }

  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  & input {
    display: block;
    font: inherit;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;

    :focus {
      outline: none;
      border-color: #4f005f;
    }
  }
`;

const Card = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Card;
