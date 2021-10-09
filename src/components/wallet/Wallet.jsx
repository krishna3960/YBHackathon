import "./wallet.scss";

function Wallet({walletOpen, setWalletOpen, balance, setBalance}) {
    return (
        <div className={"wallet " + (walletOpen && "active")}>
            <div className="toppart">
            <p>Krishna Le Moing</p>
            </div>
            <div className="middlepart">
            <p>{balance} IPT</p>
            <p>35 KW available</p>
            </div>
            <div className="bottompart">
                <div className="button">
                   <p> DEPOSIT</p>
                   </div>
            </div>

        </div>
    )
}

export default Wallet;