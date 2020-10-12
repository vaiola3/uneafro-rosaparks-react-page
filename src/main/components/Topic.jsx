import React from "react"
import "./Topic.css"

import "../components/pages/Header"

export default props => (
    <div className="topic">
        <div>{props.children}</div>
    </div>
)