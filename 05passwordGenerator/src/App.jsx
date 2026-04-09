import React , {useState,useEffect, useRef} from 'react'

function App() {

  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [length, setLength] = useState(0);

  //ref
  const inputRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "1234567890";
    if(charAllowed) str += "!@#$%^&*?";

    for(let i=1 ;i<=length;i++){
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  },[length,numberAllowed,charAllowed]);

  const copyToClipBoard = ()=>{
    inputRef.current.select();
    window.navigator.clipboard.writeText(password);
  }

  useEffect(()=>{
    passwordGenerator();
  },[numberAllowed,charAllowed,length])

  return (
    <div className='body'>
      <div className='container'>
        <div className='diplayPass'>
          <input 
          type="text"
          placeholder='password'
          value={password}
          readOnly
          ref={inputRef}
           />
          <button
          onClick={copyToClipBoard}
          >Copy</button>
        </div>
        <br />
        <div className='div2'>
            <input type="range" min={8} max={100} defaultValue={length} onChange={(e)=>setLength(e.target.value)} /> <span>Length : {length}</span>
            <br />
            <input type="checkbox" defaultValue={numberAllowed} onChange={()=> setNumberAllowed(prevState => !prevState)}/> <span>Number</span>
            <input type="checkbox" defaultValue={charAllowed} onChange={()=> setCharAllowed(prevState => !prevState)}/> <span>Character</span>
        </div>
      </div>
    </div>
    
  )
}

export default App