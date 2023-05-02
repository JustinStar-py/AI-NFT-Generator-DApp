import './App.css';
import './index.css';
import React, {useState, useEffect} from 'react';
import Header from './components/header';
import { Router, Route , Routes} from "react-router-dom";
     

function App() {                        
  return (
    <div className="App">
           <Header />
    </div>
  );
}

export default App;
