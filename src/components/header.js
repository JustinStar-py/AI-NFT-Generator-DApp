import React, {useState, useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg'
import detectEthereumProvider from '@metamask/detect-provider'

function Header() {
  const onboarding = useRef();
  const [hasProvider, setHasProvider] = useState(false)
  const initialState = { accounts: [] }               
  const [wallet, setWallet] = useState(initialState)  
  const [ConnectStatus, setConnectStatus] = useState(false)


  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true })
         setHasProvider(Boolean(provider))
      }
    
      getProvider()
    }, [])

  useEffect(() => {
    try {
     window.ethereum.request({method: 'eth_accounts'})
       .then((accounts) => {
             updateWallet(accounts[0]);
             setConnectStatus(true)
          })
        } catch {
             setHasProvider(false)
             setConnectStatus(false) 
        }}, 
    [])

  const updateWallet = async (accounts) => {     
    setWallet({ accounts })                          
  }           

  const handleConnect = async () => {                
    let accounts = await window.ethereum.request({   
      method: "eth_requestAccounts"})                                               
    updateWallet(accounts)                  
    setConnectStatus(true)         
  }     
  
  const calcBNBPrice = async () => {

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
        {hasProvider ?  
            <div className="connectButton" onClick={handleConnect}>
                 {ConnectStatus ? `${(wallet.accounts).slice(0,5)}...${(wallet.accounts).slice(38)}` : "Connect"}
             </div>
             :   
             <a className="connectButton" href={'https://metamask.io/download/'}>
                    install metamask
            </a>
          }
        <div className={ConnectStatus ? "disconnectButton" : "connectButton"}  onClick={calcBNBPrice}>
            alret
        </div>
      </div>
  </header>
  );
}

export default Header