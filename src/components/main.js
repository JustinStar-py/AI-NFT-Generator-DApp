import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';
import { green } from '@mui/material/colors';
import logo from "../logo.svg"
import '../App.css';


function Main() {
    return (
      <div className='App-Main'>
        <div id="Top-Title-Div" >
            <h1 id="Top-Title">AI NFT <br></br> <span id='bgreen-text'> DApp Generator </span> <br></br> 
                <GitHubIcon fontSize="large" />
                <TelegramIcon fontSize="large" />
                <TwitterIcon fontSize="large" />
            </h1>
            <div>
                  <img src={logo} width={100}/>
            </div>
         </div>
        <div  id="Top-Title-Div-Right">
            <h1 id="Top-Title-Right">Cheap & Free<br></br>Lets make it toghater</h1>
        </div>
        <div id="Top-Title-Div-Three" >
            <h1 id="Top-Title">Check The<br></br>Github Repository <br></br><a href='https://github.com/JustinStar-py/AI-NFT-Generator-DApp'><LinkIcon fontSize="45px" sx={{ color: green[400] }} /></a></h1>
          </div>
        <div className='mainWindow'>
            <div className='tradeBox-two'>
                <h1>Try launch DApp</h1>
                <p>Users can make they images and they if they want they can make it to an NFT by cheap fee.</p>
                <p>The App powered by React, Node.js and libraies we include: Mui as front-end library, Web3, Hardhat</p>
            <div className="rightH">
                <div className='connectButton'>Launch DApp</div>
            </div>
        </div>
         </div>   
    </div>
)
}

export default Main