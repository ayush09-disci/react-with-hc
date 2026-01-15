import { useState } from 'react'
import Chai from './Chai'

function App() {
  return (
    // fragment tag <> wrapped all element and tags in one element because react takes only one element
    <div className='h-screen w-screen bg-gray-700'>
      <div id="container" ></div>
    </div>
  )
}

export default App
