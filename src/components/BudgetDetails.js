import React, { useContext } from 'react'
import BudgetContext from './BudgetContext'


const BudgetDetails = () => {

    const {totalBudget,totalSpend} = useContext(BudgetContext)
    console.log(totalBudget,totalSpend)
  return (
    <div style={{
        display:'flex',
        gap:'300px',
        alignItems:'center',
        fontSize:'1.2rem',
        margin:'5px',
        fontWeight:'bold'
    }}>
        <div style={{

            marginLeft:'160px'
        }}>
            <p>Budget: Rs.{totalBudget}</p>
        </div>
        <div >
            <p>Remaining: Rs.{totalBudget - totalSpend}</p>
        </div>
        <div >
            <p>Spant so far:{totalSpend}</p>
        </div>
    </div>
  )
}

export default BudgetDetails