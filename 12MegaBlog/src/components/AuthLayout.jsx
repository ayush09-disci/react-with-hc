import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({
    children,
    authentication=true,
}) {

    const authStatus = useSelector((state)=> state.auth.status);
    /* 
    authStatus
    true → user is logged in
    false → user is NOT logged in
    */
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }

        // authentication -> true => mean page is protected(/home)
        // authentication -> false => mean page is not protected(/login,/signup)
        if(authentication && authStatus !== authentication){
            //If this page requires authentication AND the user is NOT authenticated → send them to login
            navigate("/login")
        }else if(!authentication && authStatus !== authentication){ 
            //If this page is for NON-authenticated users AND the user IS authenticated → send them to home
            navigate("/")
        }
        setLoading(false);
    }
    ,[authStatus,navigate,authentication])
  return loading ? <h1>Loading...</h1> : <div>{children}</div>
}

export default Protected