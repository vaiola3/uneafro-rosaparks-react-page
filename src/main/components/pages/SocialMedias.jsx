import React from "react"
import "./SocialMedias.css"

import SocialButton from "./SocialButton"

import texts from "../../../content/descriptions"

const socialMediaButtons = texts.buttonsPath

export default props => (
    <div className="container social-medias-container">
        {socialMediaButtons.map(
            x => (<SocialButton photo={x.image} link={x.url}/>)
        )}
    </div>
)