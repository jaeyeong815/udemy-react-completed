import { useRef, useState } from 'react';
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  // enteredValueValid는 사용자가 유효한 값을 입력했는지 아닌지 판별하는 상태값인데
  // 처음부터 true로 설정하면 아무런 입력을 하지 않았어도 유효하다고 판정을 하는 의미가 된다
  // 따라서 false로 초기값을 두는 것이 더 낫고, 대신 입력값을 건드렸는지 아닌지에 대한 상태를 추가하여
  // 더 정확한 상태를 파악할 수 있다
  const [enteredValueValid, setEnteredValueValid] = useState(false);
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setEnteredValueTouched(true);
    const enteredValue = nameInputRef.current.value;

    if (enteredValue.trim() === '') {
      setEnteredValueValid(false);
      return;
    }
    setEnteredValueValid(true);
    console.log('enteredValue' + enteredValue);
  };

  // 사용자가 입력값을 건드렸는데 유효하지 않은 값을 입력했을 때 입력값이 유효하지 않다는 변수인 nameInputInvalid가
  // true가 되도록 변수를 생성하였다
  // 이로써 1.건드리지 않았을 때 제출할 경우, 2.건드렸는데 유효하지 않은 값을 입력 후 제출할 경우 경고 메시지를 띄운다
  // (이 작업을 하지 않았을 땐 건드리지 않고 제출하면 정상적으로 제출이 되었는데 이를 방지한 것)
  const nameInputInvalid = !enteredValueValid && enteredValueTouched;
  const nameInputClasses = nameInputInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {nameInputInvalid && <p className='error-text'>이름을 입력해주세요.</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
