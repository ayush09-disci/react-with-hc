import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color,setColor] = useState("olive")
  return (
    <>
    <div className="w-screen h-screen " style={{backgroundColor:color}}>
      <div className="fixed w-full flex flex-wrap bottom-1 justify-evenly bg-white p-4 rounded-2xl">
        <button onClick={()=>setColor("red")} className="rounded-md text-white text-xl px-4 py-1" style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>setColor("green")} className='rounded-md text-white text-xl px-4 py-1' style={{backgroundColor:"green"}}>green</button>
        <button onClick={()=>setColor("blue")} className="rounded-md text-white text-xl px-4 py-1" style={{backgroundColor:"blue"}}>blue</button>
        <button onClick={()=>setColor("gray")} className="rounded-md text-white text-xl px-4 py-1" style={{backgroundColor:"gray"}}>gray</button>
        <button onClick={()=>setColor("orange")} className="rounded-md text-white text-xl px-4 py-1" style={{backgroundColor:"orange"}}>orange</button>
      </div>
    </div>
    </>
  )
}

export default App
