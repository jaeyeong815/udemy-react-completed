import { useState } from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const onInputChange = (e) => {
    setEnteredValue(e.target.value);
  };

  const onInputBlur = (e) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    onInputChange,
    onInputBlur,
    reset,
  };
};

export default useInput;
