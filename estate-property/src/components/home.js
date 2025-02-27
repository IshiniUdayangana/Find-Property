import "./style.css";
import propertiesData from "../properties.json"; //import json data from the file
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useFavourites } from "./favouritesContext.js";
import Card from "./card.js";


export default function Home(){

    // state variables to filter values
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [bedroomsNum, setBedroomsNum] = useState("");


    //access the properties array inside the properties.json file
    const properties = propertiesData.properties;


    //extract unique the provided city names from propertiesData
    const cities = [...new Set(properties.map(property => property.city))];
    const types = [...new Set(properties.map(property => property.type))];

    //filter the properties based on the user chosen criterias
    const filteredProperties = properties.filter(property => {
        return(
            (city === '' || property.city === city) && (postalCode === '' || property.postalCode === postalCode.toString())&& (type === '' || property.type === type) 
            && (price === '' || property.price <= price) && (bedroomsNum === '' || property.bedrooms === parseInt(bedroomsNum))
        );
    });

    //handle changes when selecting items
    const handleType = (e) => setType(e.target.value);
    const handleCity = (e) => setCity(e.target.value);
    const handlePostalCodes = (e) => setPostalCode(e.target.value);
    const handlePrice = (e) => setPrice(e.target.value);
    const handleBedrooms = (e) => setBedroomsNum(e.target.value);

    

    const chunkProperties = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    //keep track of the relevant properties to display
    const [allProperties, setProperties] = useState(properties);


    //handle the filtered items when the user clicks filter properties button
    const handleFilteredProperties = (e) => {
        e.preventDefault();
        setProperties(filteredProperties);
    };

    const handleReset = (e) => {
        setProperties(properties);
    }


    // Split properties into rows of 2 cards each
    const rows = chunkProperties(allProperties, 2);

    //logic for favourites
    const { favourites, addFavourite, removeFavourite } = useFavourites();


    const handleFavouriteChange = (property) => {
        const isFavourite = favourites.some((fav) => fav.id === property.id);
        console.log(favourites);
        if(isFavourite){
            removeFavourite(property.id);
            console.log('"removed')
        }
        else{
            addFavourite(property);
            console.log('added')
        }
    }


    return(
        
        <div className="homepage-container">
            <div className="homepage-main">
                <div >
                    <h1 className="homepage-title">BUY YOUR NEXT PROPERTY</h1>
                    
                </div>
                <div className="homepage-des">
                Experience the charm of Sri Lanka’s finest luxury properties, where modern elegance meets tropical serenity. From lush hillside retreats to stunning beachfront villas, each property offers a unique blend of sophistication and natural beauty. Immerse yourself in a lifestyle defined by world-class amenities, breathtaking landscapes, and unparalleled comfort. Whether you're looking for a tranquil escape or a vibrant urban haven, Sri Lanka's luxury real estate promises an extraordinary living experience.
                </div>
                {/* <div className="home-arrow-container">
                    <FontAwesomeIcon icon={faAngleDown} beat style={{color: "#ffffff",}} className="home-beat-arrow" />
                </div> */}
            </div>

            <div className="homepage-second">
                <div>
                    <h2 className="homepage-second-title">FIND YOUR DREAM HOME</h2>
                </div>
          
                <form onSubmit={handleFilteredProperties} className="homepage-form-container">
                    <div className="homepage-form-input"> {/* to select the type of the property*/}
                        <label>Type</label>
                        <select value={type} onChange={handleType}>
                            <option value=''>Select</option>
                            {types.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                    <div className="homepage-form-input"> {/* to select the city for the property*/}
                        <label>City</label>
                        <select value={city} onChange={handleCity}>
                            <option value=''>Select</option>
                            {cities.map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>
                    <div className="homepage-form-input"> {/* to select the number of bedrooms for the property*/}
                        <label>Bedrooms</label>
                        <select value={bedroomsNum} onChange={handleBedrooms}>
                                <option value=''>Select</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                        </select>
                    </div>
                    <div className="homepage-form-input"> {/* to select the postal code for the located area of the property*/}
                        <label>Postal Code</label>
                        <input 
                            type="number"
                            id="postalCode"
                            placeholder="Enter the postal code"
                            onChange={handlePostalCodes}/>
                    </div>
                    <div className="homepage-form-input"> {/* to select the price of the property*/}
                        <label>Price</label>
                        <select value={price} onChange={handlePrice}>
                            <option value=''>Select</option>
                            <option value='13000000'>Below 13M</option>
                            <option value='30000000'>Below 30M</option>
                            <option value='50000000'>Below 50M</option>
                            <option value='65000000'>Below 65M</option>

                        </select>
                    </div>
                
                    <div className="homepage-form-button homepage-form-input">
                        
                        <input type="submit" value="Filter Properties" />
                        
                    </div>
                </form>
            


                <div className="homepage-props">
                    {rows.map((rows, rowIndex) => (
                        <div className="home-prop-row" key={rowIndex}>
                            {rows.map((property) => (
                                <Card
                                key={property.id}
                                property = {property}
                                id={property.id}
                                title={property.title}
                                picture={property.picture}
                                description={property.description}
                                href={property.url}
                                price={property.price}
                                alt={`Image of ${property.title} in  ${property.city}`}
                                onFavouriteChange = {() => handleFavouriteChange(property)}
                                >
                                </Card>
                            ))}
                        </div>
                    ))}
                </div>

            </div>
        </div>  
    )
    
}
