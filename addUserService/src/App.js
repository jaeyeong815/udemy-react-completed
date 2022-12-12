import React from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  // 임시 데이터
  const userList = [
    { name: 'Max', age: '31' },
    { name: 'Jae', age: '32' },
  ];
  return (
    <div>
      <AddUser />
      <UserList userList={userList} />
    </div>
  );
}

export default App;
