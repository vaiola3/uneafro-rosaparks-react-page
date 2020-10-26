import React from "react"
import "./SocialButton.css"

export default props => (
    <a href={props.link} className="social-button">
        <img src={props.photo} alt=""/>
    </a>
    // <div className="social-button">
    //     <img src={props.photo} alt=""/>
    // </div>
    )