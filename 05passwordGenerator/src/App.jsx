import React, { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  let [length,setLength] = useState(8);
  let [numberAllowed,setNumberAllowed] = useState(false);
  let [characterAllowed,setCharacterAllowed] = useState(false);
  let [password,setPassword] = useState("");
  //rref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+= "1234567890"
    if(characterAllowed) str+= "!@#$%^&*()_+{}:"

    for(let i=0;i<length;i++){
      let charIndex = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  },[length,characterAllowed,numberAllowed,setPassword]);

  //useEffect(() => {
    useEffect(()=>{
      passwordGenerator();
    }
  ,[length,numberAllowed,characterAllowed,passwordGenerator]) 

const copyPasswordToClipboard = useCallback(()=>{
  //selct the text using the passwordRef
  passwordRef.current?.select();
    //copy to clipboard
    window.navigator.clipboard.writeText(password)
  },[password])


  return (
    <div class='w-screen h-screen bg-gray-800  flex justify-center items-center'>
      <div id="container" className='bg-gray-400 h-45 p-4 rounded-md'>
        <div id="inputAndButton" className='mb-4'>
          <input className='bg-gray-300 rounded-md text-xl outline-none'
           type="text" 
          placeholder='password'
          value={password}
          readOnly
          ref={passwordRef}
        />
        <button className='text-xl bg-blue-600 rounded-md px-4'
        onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div id="fields" className='flex gap-x-2 flex-col'>
          <div id="length" className='flex gap-x-2 flex-row mb-2'>
            <input 
            type="range"
            min={8}
            max={100}
            defaultValue={length}
            onChange={(e)=>setLength(e.target.value)}/>
            <label htmlFor="">Length : {length}</label>
          </div>
          <div id="number" className='flex gap-x-2 flex-row'>
            <input  
            type="checkbox"  
            defaultValue={setNumberAllowed}
            onChange={()=>setNumberAllowed((prev)=>(!prev))}
            />
            <label htmlFor="">Number</label>
          </div>
          <div id="character" className='flex gap-x-2 flex-row'>
            <input  
            type="checkbox"  
            defaultValue={setCharacterAllowed}
            onChange={()=>setCharacterAllowed((prev)=>(!prev))}
            />
            <label htmlFor="">Character</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;