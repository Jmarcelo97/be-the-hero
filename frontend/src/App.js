import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Olá, <b>Sharp Solucões Digitais :)</b>
        </p>
        <a
          className="App-link"
          href="https://sharpsolucoes.com"
          target="_blank"
        >
          Nosso site
        </a>
      </header>
    </div>
  );
}

export default App;
