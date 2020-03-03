import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import { ChatWindow } from './chat-window';
import * as serviceWorker from './serviceWorker';
import Login from './login';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/chat" component={ChatWindow} />
    </Switch>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
    --header-primary: #fff;
    --header-secondary: #b9bbbe;
    --text-normal: #dcddde;
    --text-muted: #72767d;
    --text-link: #00b0f4;
    --channels-default: #8e9297;
    --interactive-normal: #b9bbbe;
    --interactive-hover: #dcddde;
    --interactive-active: #fff;
    --interactive-muted: #4f545c;
    --background-primary: #36393f;
    --background-secondary: #2f3136;
    --background-secondary-alt: #292b2f;
    --background-tertiary: #202225;
    --background-accent: #4f545c;
    --background-floating: #18191c;
    --background-mobile-primary: #36393f;
    --background-mobile-secondary: #2f3136;
*/