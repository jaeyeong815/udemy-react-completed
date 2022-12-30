import useInput from '../hooks/useInput';

const SimpleInput = () => {
  const enteredNameIsValid = (enteredName) => enteredName.trim().length > 0;
  const enteredEmailIsValid = (enteredEmail) => enteredEmail.includes('@');

  const {
    value: nameInputValue,
    hasError: nameHasError,
    isValid: nameIsValid,
    onInputChange: onNameChange,
    onInputBlur: onNameBlur,
    reset: nameInputReset,
  } = useInput(enteredNameIsValid);

  const {
    value: emailInputValue,
    hasError: emailHasError,
    isValid: emailIsValid,
    onInputChange: onEmailChange,
    onInputBlur: onEmailBlur,
    reset: emailInputReset,
  } = useInput(enteredEmailIsValid);

  const formIsValid = nameIsValid && emailIsValid;

  const submitHandler = (e) => {
    e.preventDefault();

    if (!nameIsValid && !nameIsValid) {
      return;
    }

    nameInputReset();
    emailInputReset();

    console.log('name: ' + nameInputValue, ', email: ' + emailInputValue);
  };

  const nameInputClasses = nameHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={nameInputValue}
          onChange={onNameChange}
          onBlur={onNameBlur}
        />
        {nameHasError && <p className='error-text'>이름을 입력해주세요.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='text'
          id='email'
          value={emailInputValue}
          onChange={onEmailChange}
          onBlur={onEmailBlur}
        />
        {emailHasError && <p className='error-text'>@이 포함된 이메일을 입력해주세요.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
