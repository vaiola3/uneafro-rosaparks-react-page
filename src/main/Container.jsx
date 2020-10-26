import React, { Component } from "react"
import "./Container.css"

import Topic from "./components/Topic"
import Header from "./components/pages/Header"
import About from "./components/pages/About"
import Teacher from "./components/pages/Teacher"
import SocialMedias from "./components/pages/SocialMedias"

import texts from "../content/descriptions"

export default class extends Component {
    render () {
        return (
            <div className="container">
                <Topic name="Header">
                    <Header/>
                </Topic>
                <Topic name="About">
                    <About 
                        titleUneafro={texts.about.uneafro.title}
                        descriptionUneafro={texts.about.uneafro.description}
                        titleNucleo={texts.about.nucleo.title}
                        descriptionNucleo={texts.about.nucleo.description}
                        />
                </Topic>
                <Topic name="Teacher">
                    <Teacher/>
                </Topic>
                <Topic name="Studyes"></Topic>
                <Topic name="SocialMedias">
                    <SocialMedias/>
                </Topic>
            </div>
        )
    }
}