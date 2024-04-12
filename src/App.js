import logo from './logo.svg';
import './App.css';
import './Responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavFile from './components/NavFile';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import React from 'react';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavFile/>        
      </React.Fragment>

    </div>
  );
}

export default App;
