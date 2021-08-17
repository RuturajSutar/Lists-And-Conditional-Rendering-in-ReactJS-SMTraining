import React from 'react';
// import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';


const dummy = [
  {
    title : "Mark 1" , amount : 1000 , date : new Date(2019 , 0 , 21) , id : 1551
  },
  {
    title : "Mark 2" , amount : 2000 , date : new Date(2020 , 1 , 22) , id : 2326
  },
  {
    title : "Mark 3" , amount : 3000 , date : new Date(2021 , 2 , 23) , id : 5323
  },
  {
    title : "Mark 4" , amount : 4000 , date : new Date(2021 , 3 , 24) , id : 5869
  }
];

const App = () => {

  const [exArray , addArrayElement] = useState(dummy);

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
    addArrayElement((prevState) => {
      return [expense , ...prevState];
    });
  }

  return (
    <div>
      {/* <h2>
        And I am Iron Man
      </h2> */}

      <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>

      {/* <h3>
        Earth's Greatest Defender
      </h3> */}

      {/* <ExpenseItem title = {exArray[0].title} amount = {exArray[0].amount} date = {exArray[0].date}></ExpenseItem>
      <ExpenseItem title = {exArray[1].title} amount = {exArray[1].amount} date = {exArray[1].date}></ExpenseItem>
      <ExpenseItem title = {exArray[2].title} amount = {exArray[2].amount} date = {exArray[2].date}></ExpenseItem>
      <ExpenseItem title = {exArray[3].title} amount = {exArray[3].amount} date = {exArray[3].date}></ExpenseItem> */}
      {/* <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem> */}

      <Expenses myArray = {exArray}></Expenses>

    </div>
  );
}

export default App;
