import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role,setRole] = useState('jobseeker')
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await fetch('http://localhost:8080/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({email,password,role,name})
        })
        navigate('/login')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type='text' name='name' value={name} placeholder='Enter Name' 
            onChange={e=>setName(e.target.value)} required/><br />
            <input type='email' name='email' value={email} placeholder='Enter Email' 
            onChange={e=>setEmail(e.target.value)} required/><br />
            <input type='password' name='password' value={password} placeholder='Enter Password' 
            onChange={e=>setPassword(e.target.value)} required/><br />
            <select value = {role} onChange={e=>setRole(e.target.value)} required>
                <option value="">Select Role</option>
                <option value='jobseeker'>Job Seeker</option>
                <option value='Recruiter'>Recruiter</option>
            </select><br />
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register