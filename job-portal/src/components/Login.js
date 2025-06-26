import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = ({login}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
         e.preventDefault();
    const res = await fetch(`http://localhost:8080/users?email=${email}&password=${password}`);
    const users = await res.json();
    if (users.length) {
      login(users[0]);
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type='email' name='email' value={email} placeholder='Enter Email' 
            onChange={e=>setEmail(e.target.value)} required/><br />
            <input type='password' name='password' value={password} placeholder='Enter Password' 
            onChange={e=>setPassword(e.target.value)} required/><br />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login