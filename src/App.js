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
             <div>
             </div>
             </div>
             <div  id="Top-Title-Div-Right">
                 <h1 id="Top-Title-Right">Cheap & Free<br></br>Lets make it toghater</h1>
             </div>
             <div id="Top-Title-Div-Three" >
                <h1 id="Top-Title">Check The<br></br>Github Repository</h1>
             </div>
             <div className='mainWindow'>
               <div className='tradeBox-two'>
                 <h1>Try launch DApp</h1>
                 <p>Users can make they images and they if they want they can make it to an NFT by cheap fee.</p>
                 <p>The App powered by React, Node.js and libraies we include: Mui as front-end library, Web3, Hardhat</p>
               <div className="rightH">
                 <div className='connectButton'>Launch DApp</div>
                  <div className='connectButton'>Github Repository</div>
               </div>
               </div>

             </div>
       <div>
     
    </div>
    </div>
   
  );
}

export default App;
