import React , {useContext, useState}from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    // set the user using UserContext 
    const {setUser} = useContext(UserContext);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password});
    }
  return (
    <div class="container">
        <h2>Login</h2>
        <input
        value={username}
        onChange={(e)=> setUsername(e.target.value)} 
        type="text" place holder='name' />
        <input
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        type="password" placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login