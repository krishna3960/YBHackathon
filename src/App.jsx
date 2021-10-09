import './App.scss';
import Topbar from"./components/Topbar/topbar";
import Home from "./components/home/Home";
import User from "./components/User/User";
import Seller from "./components/Seller/Seller";
import Landingpage from './components/landingpage/Landingpage';
import Wallet from "./components/wallet/Wallet";
import { useState } from 'react';

function App() {
  
  const [walletOpen, setWalletOpen] = useState(false);
  const [balance, setBalance] = useState(100);
  return (
    <div className="App">
      
      <Topbar walletOpen={walletOpen} setWalletOpen = {setWalletOpen}/>
      <Wallet walletOpen = {walletOpen} setWalletOpen = {setWalletOpen} balance = {balance} setBalance = {setBalance}/>


      <div className = "sections">

      <Landingpage/>
       <Home/>
       <User  balance = {balance} setBalance = {setBalance}/>
       <Seller/>

       </div>
        
     
    </div>
  );
}

export default App;
