import { useRef } from 'react';
const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredValue = nameInputRef.current.value;
    console.log('enteredValue' + enteredValue);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
