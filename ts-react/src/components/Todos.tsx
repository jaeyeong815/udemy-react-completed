import { FC } from 'react';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

import { Props } from '../models/todo';

const Todos: FC<Props> = ({ children, items }) => {
  return (
    <ul className={classes.todos}>
      {items?.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
