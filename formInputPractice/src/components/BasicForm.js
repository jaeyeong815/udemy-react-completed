import useInput from '../hooks/useInput';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value?.includes('@');

const BasicForm = () => {
  const {
    value: firstNameValue,
    hasError: firstNameHasError,
    isValid: firstNameIsValid,
    onInputChange: onFirstNameChange,
    onInputBlur: onFirstNameBlur,
    reset: onFirstNameReset,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    onInputChange: onLastNameChange,
    onInputBlur: onLastNameBlur,
    reset: onLastNameReset,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    hasError: emailHasError,
    isValid: emailIsValid,
    onInputChange: onEmailChange,
    onInputBlur: onEmailBlur,
    reset: onEmailReset,
  } = useInput(isEmail);

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const onSubmitHandle = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    onFirstNameReset();
    onLastNameReset();
    onEmailReset();
  };

  return (
    <form onSubmit={onSubmitHandle}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstNameValue}
            onChange={onFirstNameChange}
            onBlur={onFirstNameBlur}
          />
          {firstNameHasError && <p className='error-text'>firstName을 입력해주세요</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={lastNameValue}
            onChange={onLastNameChange}
            onBlur={onLastNameBlur}
          />
          {lastNameHasError && <p className='error-text'>lastName을 입력해주세요</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='text'
          id='email'
          value={emailValue}
          onChange={onEmailChange}
          onBlur={onEmailBlur}
        />
        {emailHasError && <p className='error-text'>'@'가 포함된 email을 입력해주세요</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
