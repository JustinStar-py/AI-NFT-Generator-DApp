import React, {useState, useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg'


function Header() {
  const onboarding = useRef();
  const [hasProvider, setHasProvider] = useState(false)
  const initialState = { accounts: [] }               
  const [wallet, setWallet] = useState(initialState)  
  const [ConnectStatus, setConnectStatus] = useState(false)

        
  useEffect(() => {
     window.ethereum.request({method: 'eth_accounts'})
       .then((accounts) => {
               updateWallet(accounts[0]);
               setConnectStatus(true)
           })
        }, [])

  const updateWallet = async (accounts) => {     
    setWallet({ accounts })                          
  }           

  const handleConnect = async () => {                
    let accounts = await window.ethereum.request({   
      method: "eth_requestAccounts"})                                               
    updateWallet(accounts)                  
    setConnectStatus(true)         
  }     

  return (
    <header>
      <div className="leftH">
        <img src={logo} alt="logo" className="logo" />
      <a href="/tokens" className="link">
          <div className="headerItem">Tokens</div>
      </a>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={logo} alt="eth" className="eth" />
          Ethereum
        </div>
        <div className="connectButton" onClick={handleConnect}>
           {ConnectStatus ? "Disconnect" : "Connect"}
        </div>
      </div>
  </header>
  );
}

export default Header