import { FC } from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../models/todo';
import classes from './Todos.module.css';

const Todos: FC<{ items: Todo[]; onDeleteTodo: (id: string) => void }> = ({
  items,
  onDeleteTodo,
}) => {
  return (
    <ul className={classes.todos}>
      {items?.map((item) => (
        <TodoItem key={item.id} text={item.text} onDeleteTodo={onDeleteTodo.bind(null, item.id)} />
      ))}
    </ul>
  );
};

export default Todos;
