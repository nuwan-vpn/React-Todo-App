import React from 'react'
import { useState } from 'react'
import TodoItem from './TodoItem'
import './style.css'
import todoList from './todosData'

class App extends React.Component {

  constructor(){
    super();
    this.state={
      todos:todoList
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const updateTodos = prevState.todos.map(todo => {
        if(todo.id === id){
          todo.completed != todo.completed
        }
        return todo
      })

      return{
        todos : updateTodos
      }
    })
  }
  

  render(){
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
    handleChange = {this.handleChange}
    />)

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
