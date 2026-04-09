import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
    <div className='flex bg-gray-900 h-screen flex-col justify-center items-center' >
      <div className='bg-gray-400 w-60/100 rounded-xl p-5'>
        <AddTodo/>
        <Todos/>
      </div>
    </div>
    </>
  )
}

export default App
