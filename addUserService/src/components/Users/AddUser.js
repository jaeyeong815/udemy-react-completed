import { useState } from 'react';
import styled from 'styled-components';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const Form = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;

  & button {
    width: fit-content;
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
`;

const Input = styled.input`
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
`;

const AddUser = ({ onAddUser }) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [isError, setIsError] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const usernameInputHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageInputHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setIsError(true);
      setErrMessage('입력란을 모두 작성해주세요');
      return;
    }

    if (Number(age) < 1) {
      setIsError(true);
      setErrMessage('나이를 다시 확인해주세요');
      return;
    }

    onAddUser(username, age);
    setUsername('');
    setAge('');
  };

  const onOkayHandel = () => {
    setErrMessage('');
    setIsError(false);
  };

  return (
    <Card>
      <Form onSubmit={submitHandler}>
        <Label htmlFor="username">User Name</Label>
        <Input
          type="text"
          id="username"
          value={username}
          onChange={usernameInputHandler}
        />
        <Label htmlFor="age">Age(Years)</Label>
        <Input type="text" id="age" value={age} onChange={ageInputHandler} />
        <Button content="Add User" type="submit" />
      </Form>
      {isError && <ErrorModal onOkay={onOkayHandel} content={errMessage} />}
    </Card>
  );
};

export default AddUser;
