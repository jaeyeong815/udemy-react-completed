import { useState } from 'react';
import Card from '../UI/Card';

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
    <Card>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">User Name</label>
        <input type="text" id="username" onChange={usernameInputHandler} />
        <label htmlFor="age">Age(Years)</label>
        <input type="text" id="age" onChange={ageInputHandler} />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
