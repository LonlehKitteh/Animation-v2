import React from 'react'
import '../css/section.css'

export default function Section(props) {
    return (
        <div className="section">
            <h1>{props.header}</h1>
            <div dangerouslySetInnerHTML={{__html: props.content}}></div>
        </div>
    )
}
