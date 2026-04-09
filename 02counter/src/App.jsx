import { useState } from 'react'

function App() {
  //hooks
  //1) changes the state in ui
  const [counter, setCounter] = useState(0);

  const addValue = ()=>{
    if(counter<22){
        setCounter(prevCounter => prevCounter + 1);
    }
  }
  const resetValue = ()=>{
    setCounter(0);
  }
  const removeValue = ()=>{
    if(counter>=1){
        setCounter(prevCounter => prevCounter - 1);
    }
  }

  return (
    <>
    <h2>Counter : {counter}</h2>
    <br /><br />
    <button onClick={addValue}>Add</button>
    <button onClick={resetValue}>Reset</button>
    <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
