import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {

    const [myTitle , setTitle] = useState("");
    const [myAmount , setAmount] = useState("");
    const [myDate , setDate] = useState("");

    // const [user , setUserInput] = useState({
    //     myTitle : "",
    //     myAmount : "",
    //     myDate : ""
    // });

    const titleChangeHandler = (event) => {
        // console.log(event.target.value);
        setTitle(event.target.value);
        // setUserInput({...user , myTitle : event.target.value});
        // setUserInput((prevState) => {
        //     return {...user , myTitle : event.target.value};
        // });
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
        // setUserInput({...user , myAmount : event.target.value});
        // setUserInput((prevState) => {
        //     return {...user , myAmount : event.target.value};
        // });
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
        // setUserInput({...user , myDate : event.target.value});
        // setUserInput((prevState) => {
        //     return {...user , myDate : event.target.value};
        // });
        
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : myTitle,
            amount : +myAmount,
            date : new Date(myDate)
        };

        console.log("In ExpenseForm.js");
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);

        setTitle("");
        setAmount("");
        setDate("");


    }

    return (
        <form onSubmit = {submitHandler}>
            <div className = "new-expense__controls">
                <div className = "new-expense__control">
                    <label>Title</label>
                    <input value = {myTitle} type = "text" onChange = {titleChangeHandler}></input>
                    <h3>Title is : {myTitle}</h3>
                </div>
                <div className = "new-expense__control">
                    <label>Amount</label>
                    <input value = {myAmount} type = "number" min = "0.01" step = "0.01" onChange = {amountChangeHandler}></input>
                    <h3>Amount is : {myAmount}</h3>
                </div>
                <div className = "new-expense__control">
                    <label>Date</label>
                    <input value = {myDate} type = "date" min = "2019-01-01" max = "2022-12-31" onChange = {dateChangeHandler}></input>
                    <h3>Date is : {myDate}</h3>
                </div>
            </div>
            <div className = "new-expense__actions">
                <button type = "button" onClick = {props.onCancel}>Cancel</button>
                <button type = "submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;