import React from "react";
import './style.css'
import todoList from "./todosData";

function TodoItem(props){
  const completedStyle = {
    fontStyle : "italic",
    color : "#cdcdcd"
  }
    return(
        <div className="todo-item">
          <input 
            type="checkbox" 
            checked={props.item.completed}  
            onChange={(Event)=>props.handleChamge(props.item.id)}
          />
          <p style={props.item.completed ? completedStyle:null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem;