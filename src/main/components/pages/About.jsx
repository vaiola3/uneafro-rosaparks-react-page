import React from "react"
import "./About.css"

import imageFlower04 from "../../../img/flower04.svg"

import imageUneafro01 from "../../../img/uneafro01.jpeg" 

import imageRosaParks02 from "../../../img/rosaparks02.jpeg"
import imageRosaParks03 from "../../../img/rosaparks03.jpeg"

export default props => (
    <div className="about-content">
        <div className="about-description evident">
            <h1 className="evident">{props.titleUneafro}</h1>
            <p className="evident">{props.descriptionUneafro}</p>
            <p className="evident">{props.descriptionUneafro}</p>
        </div>

        <div className="uneafro-image evident">
            <img src={imageUneafro01} alt="Image UNEafro"/>
        </div>

        <div className="about-description evident">
            <h1 className="evident">{props.titleNucleo}</h1>
            <p className="evident">{props.descriptionNucleo}</p>
            <p className="evident">{props.descriptionNucleo}</p>
        </div>

        <div className="rosaparks-images evident">
            <div className="rosaparks-image">
                <img src={imageRosaParks02} alt="Image Rosa Parks"/>
            </div>
            <div className="rosaparks-image">
                <img src={imageRosaParks03} alt="Image Rosa Parks"/>
            </div>
        </div>

        <div className="not-evident fluid absolute">
            <div className="purple-triangle"></div>
            <div className="pink-triangle"></div>
        </div>

        <div className="flower-image on-botton not-evident">
            <img src={imageFlower04} alt="Image flower"/>
        </div>
    </div>
)