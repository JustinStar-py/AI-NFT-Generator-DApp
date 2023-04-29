import React from 'react'
import { Link } from "react-router-dom";
import logo from '../logo.svg'

function Header() {
  return (
    <header>
      <div className="leftH">
        <img src={logo} alt="logo" className="logo" />
        <a href="/" className="link">
          <div className="headerItem">Swap</div>
      </a>
      <a href="/tokens" className="link">
          <div className="headerItem">Tokens</div>
      </a>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={logo} alt="eth" className="eth" />
          Ethereum
        </div>
        <div className="connectButton">
           connect
        </div>
      </div>
  </header>
  );
}

export default Header