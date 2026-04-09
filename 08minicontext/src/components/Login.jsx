import React ,{useContext,useState} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const {setUser} = useContext(UserContext);

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div>
        <h1>Login</h1>
        <input 
        value={username} 
        onChange={(e)=>setUsername(e.target.value)}      
        type="text" placeholder='username' />
        <input 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}       
        type="password" placeholder='password' />
        <button
        onClick={(e)=>handleSubmit(e)}
        >Submit</button>
    </div>
  )
}

export default Login