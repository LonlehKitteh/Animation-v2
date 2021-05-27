import React from 'react'
import Navigation from './Navigation'
import '../css/home.css'
import Section from './Section'
import { arr } from '../js/data'

export default function Home() {

    return (
        <>
            <Navigation />
            <div className="page">
                <div className="svg-animation"></div>
                {arr.map((el, counter) => <Section key={counter} header={el.header} content={el.content} />)}
            </div>
        </>
    )
}
