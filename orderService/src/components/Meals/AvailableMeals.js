import styled, { keyframes } from 'styled-components';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const meals = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <StSection>
      <Card>
        <StUl>{meals}</StUl>
      </Card>
    </StSection>
  );
};

export default AvailableMeals;

const MealsAppear = keyframes`
from {
      opacity: 0;
      transform: translateY(3rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
`;

const StSection = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: ${MealsAppear} 1s ease-out forwards;
`;

const StUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
