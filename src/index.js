import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureChains, mainnet, WagmiConfig, createClient } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);
const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WagmiConfig client={client}>
     <React.StrictMode>
        <App />
     </React.StrictMode>
   </WagmiConfig>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
