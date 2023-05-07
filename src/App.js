import './App.css';
import './index.css';
import React, {useState, useEffect} from 'react';
import Header from './components/header';
import Main from './components/main';
import { Router, Route , Routes} from "react-router-dom";
import { TextField, Box } from '@mui/material';


function App() {                        
  return (
    <div className="App">
           <Header />
           <Main />
       <div>
 
    </div>
    </div>
   
  );
}

export default App;
