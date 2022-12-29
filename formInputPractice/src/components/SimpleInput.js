import { useState } from 'react';
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredValueValid, setEnteredValueValid] = useState(false);
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredValueTouched(true);
    if (enteredName?.trim() === '') {
      setEnteredValueValid(false);
      return;
    }
    setEnteredValueValid(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setEnteredValueTouched(true);

    if (enteredName.trim() === '') {
      setEnteredValueValid(false);
      return;
    }
    setEnteredValueValid(true);
    console.log('enteredName' + enteredName);
  };

  const nameInputInvalid = !enteredValueValid && enteredValueTouched;
  const nameInputClasses = nameInputInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputInvalid && <p className='error-text'>이름을 입력해주세요.</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
