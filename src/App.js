import React from 'react'
import Header from './Components/ApiCon/Header'
import Home from './Components/ApiCon/Home'
import Cart from './Components/ApiCon/Cart'
import {BrowserRoute,Route} from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      <Header />
      <Home />
      <Cart />
    </div>
  );
}

export default App;
