import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
const headers=['Source','Course','Title','Grade'];
const rows=[['Pawtograder','CS1200','Homework #7','100%']]
  return (
    <div>
      <div className='titleBar'>
        <div className='leftSide'>
          <h1>
            <div className='textStyle'>
              Assignment Collator
            </div>
          </h1>
        </div>
        <div className='rightSide'>
          <div className='refreshStyle'>
            <button>
              <div className='textStyleWhite'>
                Refresh
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className='gridContainer'>
        {headers.map((h) => (
          <div key={h} className="hCell header">
            {h}
          </div>
        ))}
        {rows.flat().map((value, i) => (
          <div key={i} className="bCell gridData">
            {value}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
