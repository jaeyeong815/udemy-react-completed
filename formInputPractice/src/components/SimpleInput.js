import { useState } from 'react';
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim().length > 0;
  const enteredEmailIsValid = enteredEmail.includes('@');

  const nameInputInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const formIsValid = enteredEmailIsValid && enteredEmailIsValid;

  const nameInputChangeHandler = (e) => {
    const currentName = e.target.value;
    setEnteredName(currentName);
  };

  const emailInputChangeHandler = (e) => {
    const currentEmail = e.target.value;
    setEnteredEmail(currentEmail);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
    console.log('enteredName' + enteredName);
    console.log('enteredEmail' + enteredEmail);
  };

  const nameInputClasses = nameInputInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputInvalid && <p className='error-text'>이름을 입력해주세요.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='text'
          id='email'
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputInvalid && <p className='error-text'>@이 포함된 이메일을 입력해주세요.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
