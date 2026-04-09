import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth.js';
import { login,logout } from './store/authSlice.js';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components/index.js';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
      .then((userData)=>{
        if (userData) {
          dispatch(login({userData}))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false));
  },[])

  return !loading ? (
    <>
    <div id="body" className='h-screen bg-gray-500 flex flex-col'>
          <Header/>
          <main className='w-full h-auto'>
            <Outlet/>
          </main>
          <Footer/>
    </div>
    </>
  ) 
  :
  (
    <div>Loading...</div>
  )

  
}

export default App