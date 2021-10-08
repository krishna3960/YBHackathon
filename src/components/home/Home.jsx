import "./home.scss";

function Home() {
    return(
        <div className="home">
            <div className="higherpart">
                <div className="logo">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="bottompart">
                <div className="textbox">
                    <div className="title">
                        <h3>ABOUT US</h3>
                    </div>
                    <div className="description">
                        <p>Inpeek is a youthful and forward-thinking IT company. Since our inception in 2009, we have been SAP partners, specializing in SAP consulting and development services.
Our business areas are like a living organism that allows us to be flexible and innovative. This dynamism enables us to readily adapt to a constantly changing market environment – and with great pleasure. 
Our business units are divided by "Sector," "SAP modules," "Engineering," "Development," and "Technology & Integration." In actuality, we have an interdisciplinary interchange among all of our business groups. We lay the groundwork for new impulses and ideas by maintaining a constant gaze beyond the horizon, resulting in long-term value creation.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;