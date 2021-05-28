import React from 'react'
import Navigation from './Navigation'
import '../css/home.css'
import Section from './Section'
import { arr } from '../js/data'
import Menu from './Menu'

export default function Home() {

    return (
        <>
            <Navigation />
            <div className="page">
                <div className="svg-animation"></div>
                <div className="push">
                    <div className="main">
                        {arr.map((el, counter) => <Section key={counter} id={`s${counter}`} header={el.header} content={el.content} />)}
                    </div>
                    <div className="aside">
                        <Menu>
                            {arr.map((el, counter) => <li key={counter}><a href={`#s${counter}`}>{el.header}</a></li>)}
                        </Menu>
                    </div>
                </div>
            </div>
        </>
    )
}
