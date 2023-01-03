import styled from 'styled-components';
import Card from '../UI/Card';

const StUl = styled.ul`
  list-style: none;
  padding: 1rem;
`;

const StLi = styled.li`
  border: 1px solid #ccc;
  margin: 0.5rem 0;
  padding: 0.5rem;
`;

const UserList = ({ userList }) => {
  return (
    <Card>
      <StUl>
        {userList.map((user) => (
          <StLi key={user.name}>
            {user.name} ({user.age} years old)
          </StLi>
        ))}
      </StUl>
    </Card>
  );
};

export default UserList;
