import React,{useState} from 'react'

function App() {
  const [color, setColor] = useState("#1e1e1e")
  return (
    <div id="body" style={{background : color}}>
    <div id="container">
      <button onClick={()=>setColor("red")} style={{background: "red"}}>red</button> 
      <button onClick={()=>setColor("yellow")} style={{background: "yellow"}}>yellow</button>
      <button onClick={()=>setColor("orange")} style={{background: "orange"}}>orange</button>
      <button onClick={()=>setColor("blue")} style={{background: "blue"}}>blue</button>
      <button onClick={()=>setColor("green")} style={{background: "green"}}>green</button>
      <button onClick={()=>setColor("pink")} style={{background: "pink"}}>pink</button>
    </div>
    </div>
  )
}

export default App