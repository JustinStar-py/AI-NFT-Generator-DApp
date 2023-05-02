import React, {useState, useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg'
var Web3 = require('web3');

function Header() {
  const onboarding = useRef();
  const [hasProvider, setHasProvider] = useState(false)
  const initialState = { accounts: [] }               
  const [wallet, setWallet] = useState(initialState)  
  const [ConnectStatus, setConnectStatus] = useState(false)
  let pancakeSwapAbi =  [
    {"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},
    ];
  var web3 = new Web3('https://snowy-compatible-gas.discover.quiknode.pro/fd01b66447628affcf409df5fcb7e738446a3b4c/');
  useEffect(() => {
     window.ethereum.request({method: 'eth_accounts'})
       .then((accounts) => {
         if (accounts.length) {
               updateWallet(accounts[0]);
               setConnectStatus(true)
          } else { setConnectStatus(false) } 
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
  
  const calcBNBPrice = async () => {
    let pancakeSwapContract = "0x10ED43C718714eb63d5aA57B78B54704E256024E".toLowerCase();
    const BNBTokenAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" //BNB
    const USDTokenAddress  = "0x55d398326f99059fF775485246999027B3197955" //USDT
    let bnbToSell = web3.utils.toWei("1", "ether") ;
    let amountOut;
    try {
        let router = await new web3.eth.Contract( pancakeSwapAbi, pancakeSwapContract );
        amountOut = await router.methods.getAmountsOut(bnbToSell, [BNBTokenAddress ,USDTokenAddress]).call();
        amountOut =  web3.utils.fromWei(amountOut[1]);
    } catch (error) {}
    if(!amountOut) return 0;
    alert(amountOut);
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
        <div className={ConnectStatus ? "disconnectButton" : "connectButton"} onClick={handleConnect}>
            {ConnectStatus ? "Disconnect" : "Connect"}
        </div>
        <div className={ConnectStatus ? "disconnectButton" : "connectButton"}  onClick={calcBNBPrice}>
            alret
        </div>
      </div>
  </header>
  );
}

export default Header