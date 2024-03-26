import React from 'react'
import { useState } from 'react'
import TodoItem from './TodoItem'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
     
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
