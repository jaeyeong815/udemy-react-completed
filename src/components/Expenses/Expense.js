import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expense.css';
import { useState } from 'react';

const Expense = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  const expenseContent =
    filterExpenses.length > 0 ? (
      filterExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
    ) : (
      <p>지출 내역이 없습니다.</p>
    );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterExpense={filterChangeHandler}
      />
      {expenseContent}
    </Card>
  );
};

export default Expense;
