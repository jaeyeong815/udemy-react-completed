import { FC, useContext, useRef } from 'react';
import { TodoContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: FC = () => {
  const todosCtx = useContext(TodoContext);
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;

    if (enteredText?.trim().length === 0) {
      // 오류 발생시키기
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='todoText'>할 일 작성하기</label>
      <input type='text' id='todoText' ref={textInputRef} />
      <button>할 일 추가하기</button>
    </form>
  );
};

export default NewTodo;
