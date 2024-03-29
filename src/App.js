import './App.css';
import BudgetDetails from './components/BudgetDetails';
import Expenses from './components/Expenses';
import AddExpenses from './components/AddExpenses';
import { createContext, useState } from 'react';
import BudgetContext from './components/BudgetContext';

function App() {
  const totalBudget = 2000;
  const [totalSpend, setTotalSpend] = useState(0);
  const [expenses, setExpenses] = useState([]);

  return (
    <BudgetContext.Provider value={{totalBudget,totalSpend,setTotalSpend, expenses,setExpenses}}>
      <div id="container">
        <h1>My Budget Planner</h1>
        <BudgetDetails/>
        <Expenses/>
        <AddExpenses/>
      </div>
    </BudgetContext.Provider>
  );
}

export default App;
