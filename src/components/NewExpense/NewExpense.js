import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {

    const[isEditing , setIsEdting] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData , 
            id : Math.random().toString()
        };
        console.log("In NewExpense.js");
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEdting(false);
    };

    const startEditingHandler = () => {
        setIsEdting(true);
    }

    const stopEditingHandler = () => {
        setIsEdting(false);
    }

    return (
        <div className = "new-expense">
            {!isEditing && <button onClick = {startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {stopEditingHandler}></ExpenseForm>}
        </div>
    );
}

export default NewExpense;