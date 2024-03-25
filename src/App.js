import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';

import Main from './components/Main'

function App() {
  const [quote, setQuote] = React.useState({
    content: "",
    author: ""
  });
  return(
    <div>
      <Header setQuote={setQuote}/>
      <Main quote={quote} setQuote={setQuote}/>
    </div>
  )
}

export default App;
