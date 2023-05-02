require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
        url: "http://127.0.0.1:8545",
        accounts: [process.env.LOCALHOST_ACC,]
      },
      hardhat: {
      },
      testnet: {
        url: "https://data-seed-prebsc-1-s1.binance.org:8545",
        chainId: 97,
        gasPrice: 20000000000,
        accounts: [process.env.BSC_ACC,]
      },
      mainnet: {
        url: "https://bsc-dataseed.binance.org/",
        chainId: 56,
        gasPrice: 20000000000,
        accounts: [process.env.BSC_ACC,]
      }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://bscscan.com/
    apiKey: process.env.ETHERSCAN_API
  },
  solidity: {
    version: "0.5.11",
    settings: {
      optimizer: {
        enabled: true
      }}
   }
};
