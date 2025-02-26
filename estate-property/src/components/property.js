import "./style.css";
import propertiesData from "../properties.json"; //import json data from the file
import React, {useState} from 'react';
import { useParams } from "react-router-dom";
import Tab from "./tab.js";
import ImageSlider from "./imageSlider";

export default function Property(){
    const {id} = useParams();

    const property = propertiesData.properties.find((prop) => prop.id === id);
    return(
        <div className="propertyPage-container">
            {/* <div className="propertyPage-main" id={`propertyPage-main-${id}`}>
                <h1 className="propertyPage-main-title">{property.title}</h1>
            </div> */}

            <div className="propertyPage-second">

            <div className="propertyPage-images-container">
                    <ImageSlider
                    pictures ={[`/images/prop${id}/img1.jpg`,
                            `/images/prop${id}/img2.jpg`,
                            `/images/prop${id}/img3.jpg`,
                            `/images/prop${id}/img4.jpg`,
                            `/images/prop${id}/img5.jpg`,
                            `/images/prop${id}/img6.jpg`,
                            ]}/>
                </div>

                <div className="propertyPage-second-tabs-container">
                    <Tab
                    longdDescription={property.longDescription}
                    floorPlanImage={property.floorplan}
                    propertyName = {property.title}
                    iframe = {property.iframe}>
                    </Tab>
                </div>

                
            </div>
        </div>
    )
}