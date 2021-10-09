import "./Seller.scss";
import {useState} from "react";




const axios = require('axios').default;

function Seller(){
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [productionRainykWh, setProductionRainykWh] = useState("");
    const [productionSunnykWh, setProductionSunnykWh] = useState("");
    const [productionNightkWh, setProductionNightkWh] = useState("");

    const headers =  {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
    return (
        <div className="seller">
            <div className="box">
                <div className="toppart">
                    <div className="wrapper">
                    <h1>Sell your excess energy </h1>
                    </div>

                </div>
                <div className="bottompart">
                    <div className="wrapper">
                        <form>
                            <div className="line">
                                <label for = "location">LOCATION</label>
                                <div className="textbox">
                                    <input type="text" placeholder ="location" onChange = {(p) => setLocation(p)} />
                                </div>
                            </div>
                            <div className="line">
                                <label for = "price">PRICE</label>
                                <div className="textbox">
                                <input type="number" placeholder ="price" onChange = {(p)=>setPrice(p)}/>
                                </div>
                            </div>
                            <div className="line">
                                <label for = "productionRainykWh">Production on a Rainy Day</label>
                                <div className="number">
                                <input type="number" placeholder ="production in kWh" onChange = {(p)=>setProductionRainykWh(p)} />
                                </div>
                            </div>
                            <div className="line">
                                <label for = "productionSunnykWh" >Production on a Sunny Day</label>
                                <div className="number">
                                <input type="number" placeholder ="production in kWh" onChange={(p)=>setProductionSunnykWh(p)} />
                                </div>
                            </div>
                            <div className="line">
                                <label for = "productionNightkWh">Production at night</label>
                                <div className="number">
                                <input type="number" placeholder ="production in kWh" onChange = {(p)=>setProductionNightkWh(p)} />
                                </div>
                            </div>
                            
                            <div className="button">
                                <button onClick = {(event) => {
                                    event.preventDefault();
                                    console.log("Entered click");
                                    const values = {
                                        Location: location.target.value,
                                        PricekWh : price.target.value,
                                        ProductionDaySunnykWh : productionSunnykWh.target.value,
                                        ProductionDayRainnykWh : productionRainykWh.target.value,
                                        ProductionDayNightkWh : productionNightkWh.target.value,
                                    };
                                    console.log(values);
                                    axios.post("https://patentyb.azurewebsites.net/api/EnergyRessource", values , headers )
                                }}>Sell</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Seller;