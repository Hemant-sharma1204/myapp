// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { useState } from 'react'
import './App.css'

function App() {
  let  [count, setCount] = useState(0)

  function handleAddValue(){
setCount((prev) =>  prev + 1)
setCount((prev) =>  prev + 1
)
setCount((prev) =>  prev + 1

)
setCount((prev) => prev + 1
)

  }
  function handleRemoveValue(){
    setCount(count - 1)
      }


  return (
    <>
<div className="couter" >{count}</div>
<button className='increase' onClick={handleAddValue}>Add Value</button>
<button className='decrease' onClick={handleRemoveValue}>Remove Value</button>


    </>
  )
}

export default App
