import React from 'react';
import './login-box.css';

const LoginBox = () => {
  return (
    <div className='background'>
      <div className='text'>
        Welcome Back!
      </div>
      <div className='text'>
      We're so excited to see you again!
      </div>
      <form>
        <label>
          Name:
          <br />
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input type="text" name="name" />
        </label>
      </form>
    </div>
  )
}

export default LoginBox;
