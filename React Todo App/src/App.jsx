import React from 'react'
import { useState } from 'react'
import TodoItem from './TodoItem'
import './style.css'
import todoList from './todosData'

class App extends React.Component {

  constructor(){
    super();
    this.state={
      todos:[]
    }
  }
 
  const todoItems = todoList.map(item => <TodoItem key={item.id} item={item}/>)

  return (

    <div className='todo-item'>
     
    <fieldset>
      <legend>Choose your tasks:</legend>

      {todoList.map(todo => (
          <div key={todo.id}>
            <input type="checkbox" checked={todo.completed} />
            <label>{todo.text}</label>
          </div>
        ))}

      {todoItems}
      
    </fieldset>
    </div>
  )
}

export default App
