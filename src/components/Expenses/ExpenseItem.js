import "./ExpenseItem.css";
import React  from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


const ExpenseItem = (props) => {

    // const exDate = new Date(2000 , 3 , 20);
    // const exTitle = "Stark Industries";
    // const exAmount = 2000;

    // const month = props.date.toLocaleString("en-US" , {month : "long"});
    // const day = props.date.toLocaleString("en-US" , {day : "2-digit"});
    // const year = props.date.getFullYear();

    // const [title , setTitle] = useState(props.title);

    // let title = props.title;

    // const ClickEvent = () => {
    //     // title = "Mark 100";
    //     setTitle("Mark 1000");
    //     window.alert(title);
    // }

    return (
        // <h1>Tony Stark</h1>
        <li>
            <Card className = "expense-item">
            {/* <div> */}
                {/* {props.date.toISOString()} */}
                {/* <div>
                    {month}
                </div>
                <div>
                    {year} 
                </div>
                <div>
                    {day}
                </div> */}   
            {/* </div> */}
            <ExpenseDate myDate = {props.date}></ExpenseDate>
            <div className = "expense-item__description">
                <h2>
                    {props.title}
                </h2>
                <div className = "expense-item__price">
                    {props.amount}
                </div>
            </div>
            {/* <button onClick = {ClickEvent}>Click Me</button> */}
        </Card>
        </li>
    );
}

export default ExpenseItem;


