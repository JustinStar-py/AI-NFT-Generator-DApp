import React, { useEffect, useState } from 'react'
import { TextField, Box } from '@mui/material';
import './css/css-generator.css';
import Replicate from "replicate";
import axios from 'axios';
import { Buffer } from 'buffer';
import { ethers } from "ethers"
import detectEthereumProvider from '@metamask/detect-provider'
import * as ipfsHttpClient from "ipfs-http-client";
import { message } from "antd";
import { abi } from "../abis";


function Generator() {
    const [messageApi, contextHolder] = message.useMessage()
    const [Loading, isLoading] = useState({
        open:false,
        message:null
    })
    const [Message, setMessage] = useState("null")
    const [image_url, set_image_url] = useState(null)
    const [ipfs_url, set_ipfs_url] = useState(null)
    const projectId = process.env.REACT_APP_PROJECT_ID
    const projectSecret = process.env.REACT_APP_PROJECT_SECERT
    const URL = `https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2`
    const nft_contract = '0x6dd2F8fF2Ea5E7685802081C422047BAf2B56a79'
    // const authorization = "Basic " + (projectId + ":" + projectSecret);
    
    useEffect(() => {
       messageApi.destroy();
       if (Loading.open) {
           setTimeout(() => {
           messageApi.open({
                type: 'loading',
                content: Loading.message,
                duration: 0
            })
        }, 0)}
    })
    
    const handleChange = (event) => {
      setMessage(event);
    };

    async function HandleImage() {
        isLoading({
             open:true,
             message: 'Generating your image... 👀'
        })
      
        try {
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
                 inputs: Message,
                 options: { wait_for_model: true },
              }),
              responseType: 'arraybuffer',
            })
      
            const data = await response.data
            const base64String = btoa(String.fromCharCode(...new Uint8Array(data)));

           set_image_url(`data:image/png;base64,${base64String}`)
            
           isLoading({
               open:true,
               message:"Uploading your image to IPFS... 🔥"
           })

           const img = await uploadImage(data)
           set_ipfs_url(img)
           
           isLoading({open:false});
        } catch (err) {
               console.error(err)
               isLoading({open:false});
          }
    }

    async function uploadImage(fileContent) {
        const uint8Array = new Uint8Array(fileContent)
    
        // encrypt the authorization
        const authorization = `Basic ${Buffer.from(
          `${projectId}:${projectSecret}`
        ).toString('base64')}`
    
        const client = await ipfsHttpClient.create({
          host: 'ipfs.infura.io',
          port: 5001,
          protocol: 'https',
          headers: {
            authorization,
          },
        })

        const result = await client.add(uint8Array)
        const uri = `https://ipfs.io/ipfs/${result.path}`
        return uri
      }
    
    async function mintImage () {
      isLoading({
        open:true,
        message:"Minting image as NFT... ✨"
    })
       const provider = new ethers.providers.Web3Provider(window.ethereum);
       const signer = await provider.getSigner();
       const nft = new ethers.Contract(
          nft_contract,
          abi,
          provider
      );
       const transaction = await nft
         .connect(signer)
         .mint(ipfs_url, { value: ethers.utils.parseUnits("0.01", "ether") });
      await transaction.wait();
    };

    return (
      <>
       {contextHolder}
        <div className='mainWindow'>
               <div className='main-generator'>
                   <div className='generator-box'>
                        <TextField id="filled-multiline-static" onChange={(event) => {handleChange(event.target.value)}} multiline rows={4} placeholder='Write your text here for generating image' variant="filled"/>
                        <div class="Button-1" onClick={HandleImage}>Generate Image</div>
                        <div class="Button-0" onClick={mintImage}>Mint it as nft</div>
                   </div>
                   <img src={image_url? image_url: "https://www.technopd.com/storage/other/midj-img.png"} width="450" height="450px" loading="lazy" style={{borderRadius:'35px'}}/>
               </div>
        </div>
      </>
    )
}









export default Generator