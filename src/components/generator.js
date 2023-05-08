import React from 'react'
import { TextField, Box } from '@mui/material';
import './css/css-generator.css';
const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML


function Generator() {

  
    return (
       <div className='mainWindow'>
               <div className='main-generator'>
                  <div>
                      <TextField id="filled-multiline-static" multiline rows={4} placeholder='Write your text here for generating image' variant="filled"/>
                      <div class="connectButton">Generate Image</div>
                      <div class="Button-0">To nft</div>
                  </div>
                  <img src="https://www.technopd.com/storage/other/midj-img.png" width="400" height="400px" loading="lazy" style={{borderRadius:'35px'}}/>
              </div>
       </div>
    )
}









export default Generator