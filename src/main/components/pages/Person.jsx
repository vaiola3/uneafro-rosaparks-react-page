import React from "react"
import "./Person.css"

import flower03 from "../../../img/flower03.svg"

export default props => (
    <div className="content">
        <div className="name-outside evident">
            <div className="flower">
               <img src={flower03} alt="Flower"/>
            </div>
            <div className="name-inside evident">
                <h2>{props.name}</h2>
            </div>
        </div>
        <div className="person-content evident">
            <div className="person-about">
                <p>{props.about}</p>
            </div>
            <div className="person-image">
                <div className="purple-person-item">
                    <div className="image">
                        <img src={props.photo} alt={props.name}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
)