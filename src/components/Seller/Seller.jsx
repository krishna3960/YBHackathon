import "./Seller.scss";

const axios = require('axios').default;

function Seller(){
    return (
        <div className="seller">
            <div className="box">
                <div className="toppart">
                    <div className="wrapper">
                    <h1>E-Sell</h1>
                    </div>

                </div>
                <div className="bottompart">
                    <div className="wrapper">
                        <form>
                            <div className="line">
                                <label for = "location">LOCATION</label>
                                <div className="textbox">
                                    <input type="text" placeholder ="location" />
                                </div>
                            </div>
                            <div className="line">
                                <label for = "quantity">QUANTITY</label>
                                <div className="textbox">
                                <input type="text" placeholder ="quantity" /> 
                                </div>
                            </div>
                            <div className="line">
                                <label for = "price">PRICE</label>
                                <div className="textbox">
                                <input type="number" placeholder ="price" />
                                </div>
                            </div>
                            <div className="line">
                                <label for = "weather">WEATHER</label>
                                <div className="checkboxes">
                                    <label for ="sunny"> sunny </label>
                                    <input type = "checkbox"></input>
                                    
                                    <label for ="rainy"> rainy </label>
                                    <input type = "checkbox"></input>
                                </div>
                            </div>
                            <div className="line">
                                <label for = "timeofday">TIME OF THE DAY</label>
                                <div className="checkboxes">
                                    <label for ="day"> day </label>
                                    <input type = "checkbox"></input>
                                    
                                    <label for ="night"> night </label>
                                    <input type = "checkbox"></input>
                                </div>
                            </div>
                            
                            <div className="button">
                                <button onClick>Sell</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Seller;