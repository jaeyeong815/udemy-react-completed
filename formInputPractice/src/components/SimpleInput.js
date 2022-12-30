import { useState } from 'react';
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const enteredNaimIsValid = enteredName.trim().length > 0;
  const nameInputInvalid = !enteredNaimIsValid && enteredValueTouched;

  const nameInputChangeHandler = (e) => {
    const currentName = e.target.value;
    setEnteredName(currentName);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredValueTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setEnteredValueTouched(true);

    if (!enteredNaimIsValid) {
      return;
    }

    setEnteredName('');
    setEnteredValueTouched(false);
    console.log('enteredName' + enteredName);
  };

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
