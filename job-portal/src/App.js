import {Routes, Route, Link} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import JobList from './components/JobList';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState('')

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem('user'))
    if(saved) setUser(saved)
  },[])

  const login = (userData) =>{
    localStorage.setItem('user',JSON.stringify(userData))
    setUser(userData)
  }
  return (
    <div>
      <nav style={{padding:'10px',borderBottom:'1px solid #ccc'}}>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
      </nav>
      <Routes>
        <Route path='/' element={<JobList />} />
        <Route path='/login' element={<Login login={login}/>} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
