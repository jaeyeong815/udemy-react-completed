import { useReducer } from 'react';

const INPUT = 'INPUT';
const BLUR = 'BLUR';
const RESET = 'RESET';

const initInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case INPUT:
      return { ...state, value: action.value };
    case BLUR:
      return { ...state, isTouched: true };
    case RESET:
      return initInputState;
    default:
      return initInputState;
  }
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initInputState);

  const onInputChange = (e) => {
    dispatch({ type: INPUT, value: e.target.value });
  };

  const onInputBlur = (e) => {
    dispatch({ type: BLUR });
  };

  const reset = () => {
    dispatch({ type: RESET });
  };

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    onInputChange,
    onInputBlur,
    reset,
  };
};

export default useInput;
