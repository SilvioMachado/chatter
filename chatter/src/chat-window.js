import React, { useState, useEffect } from 'react';
import './App.css';

const webSocket = new WebSocket('ws://192.168.15.12:8080/chat');

export const ChatWindow = () => {
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState([]);

  useEffect(() => {    
    webSocket.onmessage = (event) => {
      setReceivedMessage(receivedMessage => [...receivedMessage, event.data]);
    }
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    webSocket.send(message);
    setMessage(null);
  }

  const handleChange = event => setMessage(event.target.value);

  return (
    <div>
      <div id='messageArea'>
        {receivedMessage.map( (element) => {
          return (
            <div>
              {element}
            </div>
          )
        })}
      </div>

        <form onSubmit={handleSubmit}>
          <input type='text' name='messageInput' onChange={handleChange} />
          <input type='submit' value='send' />
        </form>

    </div>
  )
};
