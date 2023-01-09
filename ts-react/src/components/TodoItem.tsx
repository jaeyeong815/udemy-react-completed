import { FC } from 'react';
import classes from './TodoItem.module.css';

const TodoItem: FC<{ text: string; onDeleteTodo: () => void }> = ({ text, onDeleteTodo }) => {
  return (
    <li className={classes.item}>
      {text}
      <button className={classes.deleteBtn} onClick={onDeleteTodo}>
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
