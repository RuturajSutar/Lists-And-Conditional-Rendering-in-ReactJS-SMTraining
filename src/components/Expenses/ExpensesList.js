import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {


    // let noItemFound = <p>No Item Found</p>;
    
    if(props.items.length === 0){
        return (
            <h2 className = "expenses-list__fallback">No Item Found</h2>
        );
    }

    return (
        <ul className = "expenses-list">
            {props.items.map(expense => <ExpenseItem key = {expense.id} title = {expense.title} amount = {expense.amount} date = {expense.date}></ExpenseItem>)}
        </ul>
    );
}

export default ExpensesList;