import { useState } from 'react'
import './App.css'
function ClassButton(){
  return(
    <button>
      Class1 Button
    </button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 style={{backgroundColor: "lightsalmon"}}>Assignment Collater</h1>
      <p>
        <div className='button'>
          <ClassButton/>
        </div>
      </p>
    </div>
  )
}

export default App
