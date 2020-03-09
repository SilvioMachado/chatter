import React from 'react';
import './login-box.css';

const loginLink = 'http://localhost:3000/'

const LoginBox = () => {
  return (
    <div className='background'>
      <div className='text'>
        Welcome Back!
      </div>
      <div className='text'>
      We're so excited to see you again!
      </div>
      
      <div className='centerWrapper'>
        <form>
            <h5 className='LoginText'>EMAIL</h5>
            <input type='text' name='name' />
            <h5 className='LoginText'>PASSWORD</h5>
            <input type='text' name='name' />
        </form>
        <h5 className='link'><a href={loginLink}>Forgot Password</a></h5>
        
        {/* Button */}
        <div className='loginButton'>
          <strong>Login</strong>
        </div>
      </div>

    </div>
  )
}

export default LoginBox;
