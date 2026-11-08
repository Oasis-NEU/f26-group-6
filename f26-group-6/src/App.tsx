import './App.css'
function App() {
  const headers=['Source','Course','Title','Grade','Due Date'];
  let rows=[['Pawtograder','CS2100','Homework #7','100%','11/08'],['Canvas','CS1800','buifsdaybidsubc','39%','11/8']]
  {function setRows(newRows:string[][]): void{
    rows=newRows;
  }
  /*setRows() Put the data in here and on refresh it will re-run this line*/
 }
  return (
    <div>
      <div className='backgroundAndGeneral'>
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
    </div>
  )
}

export default App
