import React from "react"
import "./Header.css"

import imageRosaParks from "../../../img/rosaparks01.jpeg"
import imageFlower01 from "../../../img/flower01.svg"

export default props => (
    <div className="header">
        <div className="title evident">
            <h1>UNEAFRO BRASIL</h1>
            <h2>Núcleo Rosa Parks</h2>
        </div>
        <div className="not-evident fluid absolute">
            <div className="purple-header-item"></div>
            <div className="pink-header-item"></div>
        </div>
        
        <div className="rosa-parks evident">
            <img src={imageRosaParks} alt="Rosa Parks"/>
        </div>

        <div className="flower evident on-botton absolute">
            <img src={imageFlower01} alt="Flower"/>
        </div>
    </div>
    
)