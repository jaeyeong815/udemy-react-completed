import { useState } from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = ({ expenses, onFilterExpense }) => {
  // const [selectedData, setSelectedData] = useState([]);

  const selectedHandler = (e) => {
    const selectedYear = Number(e.target.value);
    const filterData = expenses.filter(
      (expense) => expense.date.getFullYear() === selectedYear
    );
    // setSelectedData(filterData);
    onFilterExpense(filterData);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectedHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
