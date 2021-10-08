import "./topbar.scss"

function Topbar() {
    return (
    <div className="topbar">
        <div className="left">
            <img src="https://www.postparc.ch/wp-content/uploads/2018/01/inpeek.jpg" alt = "logo"/>

        </div>
        <div className="right">
            <div className="navbar">
                <h2><a href = "#Home">Home</a></h2>
                <h2><a href = "#User">User page </a></h2>
                <h2><a href = "#Seller">Admin page </a></h2>
               
            </div>

        </div>
    </div>
);}

export default Topbar;