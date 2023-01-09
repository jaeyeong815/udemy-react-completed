import { createContext, FC, ReactNode, useState } from 'react';
import { Todo, TodosContext } from '../models/todo';

export const TodoContext = createContext<TodosContext>({
  items: [],
  addTodo: (text: string) => {},
  deleteTodo: (id: string) => {},
});

const TodosContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = { id: new Date().toISOString(), text: text };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const contextValue: TodosContext = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
  };

  return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>;
};

export default TodosContextProvider;
