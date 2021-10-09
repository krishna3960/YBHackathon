import "./topbar.scss";
import {useState} from "react";


function Topbar({walletOpen, setWalletOpen}) {
    
    return (
    <div className="topbar">
        <div className="left">
            <a href ="#contaianer"><img src="https://www.postparc.ch/wp-content/uploads/2018/01/inpeek.jpg" alt = "logo"/></a>

        </div>
        <div className="right">
            <div className="navbar">
                <h2><a href ="#contaianer">Home</a></h2>
                <h2><a href = "#Home">About us</a></h2>
                <h2><a href = "#User">Buy </a></h2>
                <h2><a href = "#Seller">Sell </a></h2>
                <div className={"walletbox " + (walletOpen && "active")} onClick = {()=>setWalletOpen(!walletOpen)}>
                   <p> Wallet </p>
                </div>
                
                
                
               
            </div>
            

        </div>
    </div>
);}

export default Topbar;