import './App.css';
import './index.css';
import React, {useState, useEffect} from 'react';
import Header from './components/header';
import Main from './components/main';
import Generator from './components/generator';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import { TextField, Box } from '@mui/material';


function App() {                        
  return (
    <div className="App">
           <Header />
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/app" element={<Generator />} />
              </Routes>
       <div>
 
    </div>
    </div>
   
  );
}

export default App;
