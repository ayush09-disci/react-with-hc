import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { Footer, Header } from "./components"
import { useDispatch, useSelector } from "react-redux";
import {login,logout} from "./store/authSlice"
import authService from './appwrite/auth.js';

function App() {

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()

  useEffect(()=>{
    setLoading(true);
    authService.getCurrentUser()
      .then((user)=>{
        if(user){
          dispatch(login({userData : user}))
        }else{
          dispatch(logout())
        }
      })
      .finally(()=> setLoading(false))
  },[])

  return !loading ? (
    <>
    <div style={{background : "#0f172a", height: "100vh"}}>
      <Header/>
      TODO:
      <Outlet/>
      <Footer/>
    </div>
    </>
  )
  : (
  <h1>Loading...</h1>
  );
}

export default App
