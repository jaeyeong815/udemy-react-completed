import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddUser = () => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const usernameInputHandler = (e) => {
    console.log('username', username);
    setUsername(e.target.value);
  };

  const ageInputHandler = (e) => {
    console.log('age', age);
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('전송');
  };

  return (
    <Form onSubmit={submitHandler}>
      <label htmlFor="username">User Name</label>
      <input type="text" id="username" onChange={usernameInputHandler} />
      <label htmlFor="age">Age(Years)</label>
      <input type="text" id="age" onChange={ageInputHandler} />
      <button type="submit">Add User</button>
    </Form>
  );
};

export default AddUser;
