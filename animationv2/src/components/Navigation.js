import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/navigation.css'

export default function Navigation() {
    
    return (
        <ul className="nav">
            <li>
                <span><NavLink activeClassName="activePage" exact={true} to="/"><i className="fas fa-home"></i>home</NavLink></span>
            </li>
            <li>
                <span><NavLink activeClassName="activePage" to="/begin"><i className="fas fa-play"></i>begin</NavLink></span>
            </li>
            <li>
                <span><NavLink activeClassName="activePage" to="/transform"><i className="fas fa-people-carry"></i>transform</NavLink></span>
            </li>
            <li>
                <span><NavLink activeClassName="activePage" to="/animation"><i className="fas fa-project-diagram"></i>animation</NavLink></span>
            </li>
            <li>
                <span><NavLink activeClassName="activePage" to="/keyframes"><i className="fas fa-wrench"></i>keyframes</NavLink></span>
            </li>
            <li>
                <span><NavLink activeClassName="activePage" to="/galery"><i className="fas fa-tasks"></i>galery</NavLink></span>
            </li>
            <li>
                <span><i className="fas fa-palette"></i>themes</span>
            </li>
        </ul>
    )
}
