import React from "react";
import './style.css'
import todoList from "./todosData";

function TodoItem(){
    return(
        <div className="todo-item">
            <input type="checkbox" id="" name="" checked />
            <p>Paragraph </p>
            <label for=""></label>
        </div>
    )
}

export default TodoItem;