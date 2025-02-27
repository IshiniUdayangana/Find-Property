import "./style.css";
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import propertiesData from "../properties.json"; //import json data from the file
import { Link} from "react-router-dom"
import { useFavourites } from "./favouritesContext";

export default function Card({id, title, picture, description, href, price, alt, property, onFavouriteChange}){

    //keep track of the properties that are being added to the favourites list

    const { favourites, addFavourite, removeFavourite } = useFavourites();

    const isFavourite = favourites.some((fav) => fav.id === property.id);

    const toggleHeartButton = () => {
        onFavouriteChange(property);
    }

    return(
        <div className="card-container">
            <div className="image-container">
                <img src={picture} alt={alt}/>
                <span><FontAwesomeIcon icon={faHeart} className={isFavourite ? "selected" : "card-heart-icon"} onClick={toggleHeartButton}/></span>
            </div>
            <div className="card-details-container">
                <div className="card-title-container">
                    <div className="card-title">
                        {title}
                    </div>
                    
                </div>

                <div className="card-des-container">
                    <div className="card-description">
                        {description}
                        
                    </div>
                    <div className="card-more-details">
                        <div className="card-price">
                            LKR {price}
                        </div>
                        <div className="card-button-container">
                         <Link key={property.id} to={`/property/${property.id}`} className="card-readmore-button">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
