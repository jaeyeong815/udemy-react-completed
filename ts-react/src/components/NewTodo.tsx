import { FC, useRef } from 'react';

const NewTodo: FC<{ onAddTodo: (text: string) => void }> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;

    if (enteredText?.trim().length === 0) {
      // 오류 발생시키기
      return;
    }

    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='todoText'>할 일 작성하기</label>
      <input type='text' id='todoText' ref={textInputRef} />
      <button>할 일 추가하기</button>
    </form>
  );
};

export default NewTodo;
