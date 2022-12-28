import React from 'react';
import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (username, age) => {
    setUserList((prevUserList) => [{ name: username, age }, ...prevUserList]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList userList={userList} />
    </div>
  );
}

export default App;
