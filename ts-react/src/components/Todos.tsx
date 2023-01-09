import { FC, useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../store/todos-context';
import classes from './Todos.module.css';

const Todos: FC = () => {
  const todosCtx = useContext(TodoContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items?.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onDeleteTodo={todosCtx.deleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
