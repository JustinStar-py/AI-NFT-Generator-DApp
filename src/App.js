import './App.css';
import './index.css';
import React, {useState, useEffect} from 'react';
import Header from './components/header';
import { Router, Route , Routes} from "react-router-dom";
import detectEthereumProvider from '@metamask/detect-provider'
     

function App() {   

  
  // useEffect(() => {
  //   const getProvider = async () => {
  //     const provider = await detectEthereumProvider({ silent: true })
  //     setHasProvider(Boolean(provider))
  //     }
    
  //     getProvider()
  //   }, [])

                                        
  return (
    <div className="App">
           <Header />
    </div>
  );
}

export default App;
