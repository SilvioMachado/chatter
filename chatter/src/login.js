import React from 'react';

const Login = () => {
  
  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Password:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
};

export default Login;
