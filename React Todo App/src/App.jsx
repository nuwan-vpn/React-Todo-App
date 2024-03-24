import React from 'react'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
     
    <fieldset>
      <legend>Choose your tasks:</legend>

      <div>
      <input type="checkbox" id="" name="" checked />
      <label for=""></label>
      </div>

      <div>
      <input type="checkbox" id="" name="" />
      <label for=""></label>
      </div>

      <div>
      <input type="checkbox" id="" name="" />
      <label for=""></label>
      </div>

      <div>
      <input type="checkbox" id="" name="" />
      <label for=""></label>
      </div>
      
    </fieldset>
    </div>
  )
}

export default App
