import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <>
        <div className='body flex justify-center mt-6 mb-6'>
            <div className='h-auto w-auto p-4 bg-gray-200 rounded-xl'>
                <h1 className='text-black text-center text-2xl font-bold mb-4 '>Login</h1>
                <input className='bg-gray-400 mb-3 px-4 py-2 rounded-xl outline-0' type="text" placeholder='enter a email'/>
                <br />
                <input className='bg-gray-400 mb-3 px-4 py-2 rounded-xl outline-0' type="password" placeholder='enter a password'/>
                <br />
                <NavLink to="/" className='flex justify-center'>
                    <button className='text-black text-l bg-orange-600 px-5 py-1 text-center rounded-xl hover:bg-orange-700'>Login</button>
                </NavLink>
            </div>
        </div>
    </>
  )
}

export default Login    