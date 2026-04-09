import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


function AuthLayout({
    authentication=true,
    children
}) {
    const authStatus = useSelector((state)=> state.auth.status);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoading(false);
    },[authStatus,authentication,navigate]);
  return loading ? 
  <h2>Loading...</h2>
  :
  <div>{children}</div>
}

export default AuthLayout