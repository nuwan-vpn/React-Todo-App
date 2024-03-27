import React from 'react'
import { useState } from 'react'
import TodoItem from './TodoItem'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='todo-item'>
    <fieldset>
      <legend>Choose your tasks:</legend>

      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
     
    </fieldset>
    </div>
  )
}

export default App
