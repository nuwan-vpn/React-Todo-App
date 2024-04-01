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

  render(){
    const todoItems = todoList.map(item => <TodoItem key={item.id} item={item}/>)

  return (

    <div className='todo-item'>
     
      <fieldset>
        <legend>Choose your tasks:</legend>

        {todoItems}
        
      </fieldset>
    </div>
    )

  }
  
}

export default App
