import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './App';
import Login from './views/Login';

const rootElement = document.getElementById('root');
render(
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </Router>,
  rootElement
);
