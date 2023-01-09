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

  const deleteTodoHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='App'>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
