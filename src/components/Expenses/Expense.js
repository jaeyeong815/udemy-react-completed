import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expense.css';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

const Expense = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterExpense={filterChangeHandler}
      />
      <ExpensesList expenses={filterExpenses} />
    </Card>
  );
};

export default Expense;
