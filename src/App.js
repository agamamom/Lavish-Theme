import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Navbar from './components/pages/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/'/>
      </Routes>
    </Router>
  );
}

export default App;
