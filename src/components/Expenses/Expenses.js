import React from 'react';
import "./Expenses.css";
// import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from "react";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


const Expenses = (props) => {

    const [filteredYear , setFilteredYear] = useState("2020");

    const filterChangeHandler =  (selectedYear) => {
        console.log("In Expenses.js");
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    const filteredYears = props.myArray.filter(expense => new Date(expense.date).getFullYear().toString() === filteredYear);

    

    return (
        <div>
        <Card className = "expenses">
            <ExpenseFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}></ExpenseFilter>
            {/* {filteredYears.length === 0 ? (<p>No Item Found</p>) : (filteredYears.map(expense => <ExpenseItem key = {expense.id} title = {expense.title} amount = {expense.amount} date = {expense.date}></ExpenseItem>))}; */}
            {/* {filteredYears.length === 0 && <p>No Item Found</p>}
            {filteredYears.length > 0 && filteredYears.map(expense => <ExpenseItem key = {expense.id} title = {expense.title} amount = {expense.amount} date = {expense.date}></ExpenseItem>)}; */}
            {/* {filteredYears.map(expense => <ExpenseItem key = {expense.id} title = {expense.title} amount = {expense.amount} date = {expense.date}></ExpenseItem>)} */}


            <ExpensesChart expenses = {filteredYears}></ExpensesChart>


            <ExpensesList items = {filteredYears}></ExpensesList>
            
            
            
            
            {/* {props.myArray.map(expense => <ExpenseItem key = {expense.id} title = {expense.title} amount = {expense.amount} date = {expense.date}></ExpenseItem>)} */}
            {/* <ExpenseItem title = {props.myArray[0].title}  amount = {props.myArray[0].amount} date = {props.myArray[0].date}></ExpenseItem>
            <ExpenseItem title = {props.myArray[1].title}  amount = {props.myArray[1].amount} date = {props.myArray[1].date}></ExpenseItem>
            <ExpenseItem title = {props.myArray[2].title}  amount = {props.myArray[2].amount} date = {props.myArray[2].date}></ExpenseItem>
            <ExpenseItem title = {props.myArray[3].title}  amount = {props.myArray[3].amount} date = {props.myArray[3].date}></ExpenseItem> */}
        </Card>
        </div>
    );
}

export default Expenses;