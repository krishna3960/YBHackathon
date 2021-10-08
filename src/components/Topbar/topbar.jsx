import "./topbar.scss"

function Topbar() {
    return (
    <div className="topbar">
        <div className="left">
            <img src="inpeek\public\images\inpeek_logo_blau.png"/>

        </div>
        <div className="right">
            <div className="navbar">
                <h2>Home</h2>
                <h2>User page</h2>
                <h2>Admin page</h2>
                <h2>Contact</h2>
            </div>

        </div>
    </div>
);}

export default Topbar;