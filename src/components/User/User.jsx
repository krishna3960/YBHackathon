import "./User.scss";
import {useState, useEffect} from 'react';
import axios from "axios";

function User({balance, setBalance}) {
    const [searchName, setSearchName] = useState("");
    const [searchLocation, setSearchLocation] = useState("");
    const [searchQuantity, setSearchQuantity] = useState("");
    const [searchPrice, setSearchPrice] = useState("");
    
    const axios = require('axios').default;

    const [fetchedData, setFetchedData] = useState([]);
    useEffect(()=>{
        const getData = async () => {
            const response = await axios.get('https://patentyb.azurewebsites.net/api/energyRessource/allOffers');
            setFetchedData(response.data);
        };
        getData();
    }, []);

    console.log(fetchedData);
    
    
 
    

   
 
    return (
        <div className="userpage">
            <div className="toppart">
                <div className="title">
                    <h1>Green E-buy</h1>
                    <p>First peer to peer Energy Marketplace</p>
                </div>

            </div>
            <div className="bottompart">
                <div className="itemcontainer">

                <h3>Filter your search</h3>
                    <div className="searchbar">
                        
                        <div className="searchbox">
                            <p>Name</p>
                            <input type ="text" placeholder = "search for a name" onChange = {(event) => {setSearchName(event.target.value)}}/>


                        </div>
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
                    </div>
                    <div className="items">
                       {fetchedData.filter((data)=>
                           (!searchLocation || data.location.toLowerCase().includes(searchLocation.toLowerCase())) &&
                           (!searchPrice || data.price < searchPrice) &&
                           (!searchName || data.username.toLowerCase().includes(searchName.toLowerCase())) &&
                           (!searchQuantity || data.quantity > searchQuantity))
                            .slice(0, 7).map((p) => (
                            <div className="item" key = {p.id}>
                            
                            <div className="location">
                            <p> {p.location}</p>
                            </div>
                            <div className="kw">
                            <p> {p.productionDaySunnykWh} KW</p>
                            </div>
                            <div className="price">
                            <p> {p.pricekWh} IPT</p>
                            </div>
                            <div className="submit">
                                <button onClick = {() => {
                                    setBalance(balance-p.pricekWh)
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