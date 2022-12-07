import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({ title, amount, date }) => {
  let [expenseTitle, setExpenseTitle] = useState(title);
  const clickHandler = () => {
    setExpenseTitle('updated');
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
