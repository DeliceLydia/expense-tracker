import React, {useState} from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) =>{
  const [title, useTitle] = useState(props.title);
  const ClickHandler = () => {
    useTitle("Updated!")
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={ClickHandler}>Change Title</button>
      </div>
    </ Card>
  );
}

export default ExpenseItem;
