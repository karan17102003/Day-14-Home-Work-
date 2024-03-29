import React, { useContext } from 'react'

import BudgetContext from './BudgetContext'
import ExpenseCard from './ExpenseCard';


const Expenses = () => {
    
    const {expenses,setExpenses} = useContext(BudgetContext);
  return (
    <div style={{
        marginBottom:"1rem",
        fontSize:'30px'
    }}>
        <h2 style={{
        marginBottom:"1rem",
        fontSize:'30px',
        fontWeight:'500',
        marginLeft:'170px'
    }}>Expenses</h2>
        <div>
            {expenses.length === 0 && <p style={{
        marginTop:'10px',
        fontWeight:'500',
        marginLeft:'170px'
    }}>Add Data To List . . . . .</p>}
            {
                expenses.map((elem, index)=>{
                    return(
                        <ExpenseCard key={index} name = {elem.name} cost = {elem.cost} id = {index} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Expenses