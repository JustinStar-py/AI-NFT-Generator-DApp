import './App.css';
import './index.css';
import React, {useState, useEffect} from 'react';
import Header from './components/header';
import { Router, Route , Routes} from "react-router-dom";
import { TextField, Box } from '@mui/material';

function App() {                        
  return (
    <div className="App">
           <Header />
             <div id="Top-Title-Div" >
                <h1 id="Top-Title">AI NFT <br></br>DApp Generator</h1>
             </div>
             <div  id="Top-Title-Div-Right">
                 <h1 id="Top-Title-Right">Cheap & Free<br></br>Lets make it toghater</h1>
             </div>
             <div id="Top-Title-Div-Three" >
                <h1 id="Top-Title">Check The<br></br>Github Repository</h1>
             </div>
       <div>
     
    </div>
    </div>
   
  );
}

export default App;
