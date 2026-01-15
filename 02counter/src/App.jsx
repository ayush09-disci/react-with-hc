import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //hooks
  //1) changes the state in ui
  let [counter,setCounter] = useState(15);


  const addValue = () =>{
    if(counter >= 20) setCounter(20);
    else {
      setCounter(counter + 1);
    };
  }
  const removeValue = () =>{
    if(counter <= 0) setCounter(0);
    else setCounter(counter-1);
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <b>Counter : {counter}</b>
    <br /><br />
    <button onClick={addValue}>Add Value {counter}</button>
    <br /><br />
    <button onClick={removeValue}>remove Value {counter}</button>
    </>
  )
}

export default App
