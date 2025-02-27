import "./style.css";
import React from "react";
import { useFavourites } from "./favouritesContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import propertiesData from "../properties.json"; //import json data from the file
import Card from "./card.js";

export default function Favourites(){

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

    const properties = propertiesData.properties;

    const chunkProperties = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };



    const rows = chunkProperties(favourites, 2);

    if(favourites.length === 0){
        return (
            <div className="favourites-container favourites-container-empty">
                <div className="favs-title-container">
                    <h1 className="favs-main-title">FAVOURITES<FontAwesomeIcon icon={faHeart} className="favs-heart-icon"/></h1>
                    <h2 className="favs-sub-title">Explore a collection of dream properties you've personally selected, showcasing the best in comfort, style, and investment potential—tailored to fit your unique tastes and needs</h2>
                </div>

                <div className="no-favourites">No favourites to display...</div>
            </div> 
        )
    }
    else{
        return (
            <div className="favourites-container">
                <div className="favs-title-container">
                    <h1 className="favs-main-title">FAVOURITES<FontAwesomeIcon icon={faHeart} className="favs-heart-icon"/></h1>
                    <h2 className="favs-sub-title">Explore a collection of dream properties you've personally selected, showcasing the best in comfort, style, and investment potential—tailored to fit your unique tastes and needs</h2>
                </div>
    
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
    
            
        );
    }
    

    
}