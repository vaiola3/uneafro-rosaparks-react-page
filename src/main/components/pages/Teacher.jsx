import React from "react"
import "./Teacher.css"

import Person from "./Person"

import texts from "../../../content/descriptions"

const teachers = texts.teachers

export default props => (
    <div className="teacher-container">
        <h1>Professores</h1>
        {teachers.map(
            x => (<Person name={x.name} about={x.about} photo={x.image}/>)
        )}
    </div>
)