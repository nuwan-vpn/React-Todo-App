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
          <div key={todo.id}>
            <input type="checkbox" checked={todo.completed} />
            <label>{todo.text}</label>
          </div>
        ))}

    </fieldset>
    </div>
  )
}

export default App
