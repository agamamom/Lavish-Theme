import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import navBar from './components/pages/navBar';

function App() {
  return (
    <Router>
      <navBar/>
      <Switch>
        <Route path='/'/>
      </Switch>
    </Router>
  );
}

export default App;
