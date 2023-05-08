import React from 'react'
import { TextField, Box } from '@mui/material';
import './css/css-generator.css';
import Replicate from "replicate";
import axios from 'axios';
import { Buffer } from 'buffer';
import * as ipfsHttpClient from "ipfs-http-client";



function Generator() {
    const projectId = "<YOUR PROJECT ID>";
    const projectSecret = "<YOUR PROJECT SECRET>";
    const authorization = "Basic " + btoa(projectId + ":" + projectSecret);

    const ipfs = ipfsHttpClient.create({
        url: "https://ipfs.infura.io:5001/api/v0",
        headers:{
          authorization
        }
      })
    async function ai() {
        try {
            const URL = `https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2`
      
            // Send the request
            const response = await axios({
              url: URL,
              method: 'POST',
              headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AI_TOKEN}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              data: JSON.stringify({
                inputs: "new ai robot",
                options: { wait_for_model: true },
              }),
              responseType: 'arraybuffer',
            })
      
            const data = response.data
            console.log(data)
          } catch (err) {
            console.error(err)
          }
    }
    ai()
    return (
       <div className='mainWindow'>
               <div className='main-generator'>
                  <div>
                      <TextField id="filled-multiline-static" multiline rows={4} placeholder='Write your text here for generating image' variant="filled"/>
                      <div class="connectButton" onClick={ai}>Generate Image</div>
                      <div class="Button-0">To nft</div>
                  </div>
                  <img src="https://www.technopd.com/storage/other/midj-img.png" width="400" height="400px" loading="lazy" style={{borderRadius:'35px'}}/>
              </div>
       </div>
    )
}









export default Generator