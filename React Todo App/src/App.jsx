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
      <p>Paragraph 1</p>
      <label for=""></label>
      </div>

      <div>
      <input type="checkbox" id="" name="" />
      <p>Paragraph 2</p>
      <label for=""></label>
      </div>

      <div>
      <input type="checkbox" id="" name="" />
      <p>Paragraph 3</p>
      <label for=""></label>
      </div>

      <div>
      <input type="checkbox" id="" name="" />
      <p>Paragraph 4</p>
      <label for=""></label>
      </div>
      
    </fieldset>
    </div>
  )
}

export default App
