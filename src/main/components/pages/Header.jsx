import React from "react"
import "./Header.css"

import imageRosaParks from "../../../img/rosaparks01.jpeg"
import imageFlower01 from "../../../img/flower01.svg"

export default props => (
    <div className="header">
        {/* <div className="flower-image not-evident on-top absolute">
            <img src={imageFlower01} alt="Flower image"/>
        </div> */}
        <div className="title evident">
            <h1>UNEAFRO BRASIL</h1>
            <h2>Núcleo Rosa Parks</h2>
        </div>
        <div className="not-evident fluid absolute">
            <div className="purple-item"></div>
            <div className="pink-item"></div>
        </div>
        
        <div className="rosa-parks-image evident">
            <img src={imageRosaParks} alt="Rosa Parks image"/>
        </div>

        <div className="flower-image evident on-botton absolute">
            <img src={imageFlower01} alt="Flower image"/>
        </div>
    </div>
    
)