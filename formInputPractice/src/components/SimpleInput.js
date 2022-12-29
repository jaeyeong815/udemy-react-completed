import { useRef, useState } from 'react';
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredValueValid, setEnteredValueValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredValue = nameInputRef.current.value;

    if (enteredValue.trim() === '') {
      setEnteredValueValid(false);
      return;
    }
    setEnteredValueValid(true);
    console.log('enteredValue' + enteredValue);
  };

  const nameInputClasses = enteredValueValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!enteredValueValid && <p className='error-text'>이름을 입력해주세요.</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
