import React, { useState } from 'react';
import LoginBox from './login-box';

const url = 'http://192.168.64.4/supera/cmUploadFile.php';

const Login = () => {
  
  const [file, setFile] = useState();

  const changeHandler = e => {
    console.log('files', e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const clickHandler = e => {
    if (file === undefined) {
      alert('Não há arquivos');
    }
    const fd = new FormData();
    fd.append('file', file);

    const req = new Request(url, {
      method: 'POST',
      mode: 'no-cors', 
      body: fd
    });

    return fetch(req)
      .then(response => console.log('response', response))
      .catch(error => console.log('fuck', error));
  };

  return (
    <div>
      <LoginBox />

      <input type='file' name='fileInput' onChange={changeHandler} />
      <button onClick={clickHandler} value='Upload'/>
    </div>
  );
};

export default Login;

