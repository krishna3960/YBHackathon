import "./User.scss";
import {useState, useEffect} from 'react';
import axios from "axios";

function User({balance, setBalance, post, setPost, kWh, setkWh}) {
    const [searchLocation, setSearchLocation] = useState("");
    const [searchQuantity, setSearchQuantity] = useState("");
    const [searchPrice, setSearchPrice] = useState("");
    const [sunny, setSunny] = useState(true);
    
    const axios = require('axios').default;

    const [fetchedData, setFetchedData] = useState([]);
    useEffect(()=>{
        const getData = async () => {
            const response = await axios.get('https://patentyb.azurewebsites.net/api/energyRessource/allOffers');
            setFetchedData(response.data);
        };
        getData();
    }, [post]);

    console.log(fetchedData);
    
    
 
    

   
 
    return (
        <div className="userpage" id ="User">
            <div className="toppart">
                <div className="title">
                    <h1>Buy Energy</h1>
                </div>

            </div>
            <div className="bottompart">
                <div className="itemcontainer">

                <h3>Filter your search</h3>
                    <div className="searchbar">
                        
                        <div className="searchbox">
                            <p>Location</p>
                            <input type="text" 
                            placeholder ="search your location" onChange = {(event) => {setSearchLocation(event.target.value)}}
                            />      
                        </div>
                        <div className="searchbox">
                            <p>Quantity in KW</p>
                            <input type="number" 
                            placeholder ="search your quantity" onChange = {(event) => {setSearchQuantity(event.target.value)}}
                            />      
                        </div>
                        <div className="searchbox">
                            <p>Price</p>
                            <input type="text" 
                            placeholder ="search your price" onChange = {(event) => {setSearchPrice(event.target.value)}}
                            />      
                        </div>
                        <div className="slider">
                            <p>Sunny</p>
                            <div className="outline">
                                <div className={"circle " + (sunny && " rain")} onClick = {() =>  {
                                        setSunny(!sunny);
                                }}>

                                </div>
                            </div>
                            <p>Rainy</p>
                        </div>

                    </div>
                    <div className="items">
                       {fetchedData.filter((data)=>
                           (!searchLocation || data.location.toLowerCase().includes(searchLocation.toLowerCase())) &&
                           (!searchPrice || data.pricekWh <= searchPrice) &&
                           (!searchQuantity || data.quantity > searchQuantity))
                            .slice(0, 5).map((p) => (
                            <div className="item" key = {p.id}>
                            
                                <div className="location">
                                <p> {p.location}</p>
                                </div>
                                <div className="kw">
                                <p> {sunny ? p.productionDaySunnykWh :p.productionDayRainnykWh } 
                                    KW</p>
                                </div>
                                <div className="price">
                                <p> {p.pricekWh} IPT</p>
                                </div>
                                <div className="submit">
                                    <button onClick = {() => {
                                        (balance-p.pricekWh) > 0 ?
                                        setBalance(balance-p.pricekWh) : console.log("insuffisent fund");
                                        (sunny && (balance-p.pricekWh)>0 ) ? setkWh(kWh+p.productionDaySunnykWh) : console.log("insuffiscient fund");
                                        (!sunny && (balance-p.pricekWh)>0) ? setkWh(kWh+p.productionDayRainnykWh) : console.log("insuffiscient fund")
                                    }}> BUY </button>        
                                </div>
                        </div>
                    
                    ))}
                    </div>
                    <div className="pagination">

                    </div>
                </div>

            </div>

        </div>
    ) ;
}

export default User;