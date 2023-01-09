import Todos from './components/Todos';
import { Todo } from './models/todo';
import './App.css';
import NewTodo from './components/NewTodo';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = { id: new Date().toISOString(), text: text };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div className='App'>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
