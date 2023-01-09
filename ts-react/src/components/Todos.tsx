import { FC } from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../models/todo';
import classes from './Todos.module.css';

const Todos: FC<{ items: Todo[] }> = ({ items }) => {
  return (
    <ul className={classes.todos}>
      {items?.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
