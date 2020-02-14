import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './components/Header';
// import mujer from './assets/imgs/mujer.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
        {/* <img src={mujer}  alt="x" /> */}
    </div>
  );
}

export default App;
