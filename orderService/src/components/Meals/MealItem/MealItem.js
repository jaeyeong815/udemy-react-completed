import styled from 'styled-components';

const MealItem = ({ name, description, price }) => {
  const priceFormat = `$${price}`;
  return (
    <Container>
      <div>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Price>{priceFormat}</Price>
      </div>
    </Container>
  );
};

export default MealItem;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.h3`
  margin: 0 0 0.25rem 0;
`;
const Description = styled.div`
  font-style: italic;
`;

const Price = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
`;
