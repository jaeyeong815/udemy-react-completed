import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [addExpenseToggle, setaddExpenseToggle] = useState(true);

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const addToggleHandler = () => {
    setaddExpenseToggle((prevToggle) => !prevToggle);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    onSaveExpenseData(expenseData);
    addToggleHandler();
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      {addExpenseToggle ? (
        <div className="new-expense__toggleBtn">
          <button type="button" onClick={addToggleHandler}>
            Add New Expense
          </button>
        </div>
      ) : (
        <>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Ammount</label>
              <input
                type="number"
                value={enteredAmount}
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                value={enteredDate}
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={addToggleHandler}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </>
      )}
    </form>
  );
};

export default ExpenseForm;
