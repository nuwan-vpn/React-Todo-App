import React from 'react'
import { useState } from 'react'
import TodoItem from './TodoItem'
import './style.css'
import todoList from './todosData'

function App() {
  const [count, setCount] = useState(0)
  
  return (

    <div className='todo-item'>
    <fieldset>
      <legend>Choose your tasks:</legend>
      
      {todoList.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}

      {/* <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/> */}
     
    </fieldset>
    </div>
  )
}

export default App
