import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = ({ onAddUser }) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const usernameInputHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageInputHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      console.log('입력값이 비어있습니다');
      return;
    }

    if (Number(age) < 1) {
      console.log('나이를 다시 확인해주세요');
      return;
    }

    onAddUser(username, age);
    setUsername('');
    setAge('');
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={usernameInputHandler}
        />
        <label htmlFor="age">Age(Years)</label>
        <input type="text" id="age" value={age} onChange={ageInputHandler} />
        <Button content="Add User" type="submit" />
      </form>
    </Card>
  );
};

export default AddUser;
