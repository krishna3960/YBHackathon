import "./User.scss";
import {useState, useEffect} from 'react';
import axios from "axios";

function User() {
    const [searchName, setSearchName] = useState("");
    const [searchLocation, setSearchLocation] = useState("");
    const [searchQuantity, setSearchQuantity] = useState("");
    const [searchPrice, setSearchPrice] = useState("");
    
    const axios = require('axios').default;

    const [fetchedData, setFetchedData] = useState([]);
    useEffect(()=>{
        const getData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setFetchedData(response.data);
        };
        getData();
    }, []);

    console.log('asd', fetchedData);
    
    
    const provider_data = [
        { 
            id : 1 ,
            username : "Seyed",
            location : "Biel",
            quantity : 10,
            price : 150,
        },
        {
            id : 2 ,
            username : "Krishna",
            location : "Fribourg",
            quantity : 20,
            price : 250 ,
        },
        { 
            id : 1 ,
            username : "Seyed",
            location : "Biel",
            quantity : 10,
            price : 150,
        },
        {
            id : 2 ,
            username : "Krishna",
            location : "Fribourg",
            quantity : 20,
            price : 250 ,
        },
        { 
            id : 1 ,
            username : "Seyed",
            location : "Biel",
            quantity : 10,
            price : 150,
        },
        {
            id : 2 ,
            username : "Krishna",
            location : "Fribourg",
            quantity : 20,
            price : 250 ,
        },
        
    ]

    

   
 
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
                            <div className="username">
                                <p>{p.username}</p>
                                
                            </div>
                            <div className="location">
                            <p> {p.location}</p>
                            </div>
                            <div className="kw">
                            <p> {p.quantity} KW</p>
                            </div>
                            <div className="price">
                            <p> {p.price}</p>
                            </div>
                            <div className="submit">
                                <button> BUY </button>        
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