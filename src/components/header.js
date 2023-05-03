import React, {useState, useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg'
import detectEthereumProvider from '@metamask/detect-provider'
import Web3 from 'web3';
import { simpleStorageAbi } from '../abis';



function Header() {
  const web3 = new Web3(Web3.givenProvider);
  const onboarding = useRef();
  const [hasProvider, setHasProvider] = useState(false)
  const initialState = { accounts: [] }               
  const [wallet, setWallet] = useState(initialState)  
  const [ConnectStatus, setConnectStatus] = useState(false)

  useEffect(() => {
    const getProvider = async () => {
        const provider = await detectEthereumProvider({ silent: true })
        setHasProvider(Boolean(provider));        
        setConnectStatus(false);
      }
    
      getProvider()
    }, [])

  useEffect(() => {
     window.ethereum?.request({method: 'eth_accounts'})
       .then((accounts) => {
          if (accounts.length) {
             updateWallet(accounts[0]);
             setConnectStatus(true)
          } else {
             setConnectStatus(false)
          }
      })
     }, 
    [])

  const updateWallet = async (accounts) => {     
    setWallet({ accounts })                          
  }           

  const handleConnect = async () => {                
     const req_connect = await window.ethereum.request({   
      method: "eth_requestAccounts"})
     .then(updateWallet(["Connecting"]))
     .then((accounts) => 
        updateWallet(accounts[0]),         
        setConnectStatus(true)
     ).then(error => {
        console.log(error)
     })                                  
  }     

  return (
    <header>
      <div className="leftH">
        <img src={logo} alt="logo" className="logo" />
      {/* <a href="/tokens" className="link">
          <div className="headerItem">Github Repository</div>
      </a> */}
      </div>
      <div className="rightH">
      <div className="connectButton">Launch DApp</div>
        {hasProvider ?  
            <div className="connectButton" onClick={handleConnect}>
                 {ConnectStatus ? `${(wallet.accounts).slice(0,5)}...${(wallet.accounts).slice(38)}` : "Connect"}
             </div>
             :   <a className="connectButton" href={'https://metamask.io/download/'}>
                    install metamask
            </a>
          }
      </div>
  </header>
  );
}

export default Header