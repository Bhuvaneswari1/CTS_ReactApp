import React from 'react'

const Login = ({isLoggedIn, username}) => {
  if(isLoggedIn){
    return <p data-testid="welcome-message">Welcome back, {username}!</p>
  }
  else{
    return <p data-testid="guest-message">Please log in to continue.</p>
  }
}

export default Login

