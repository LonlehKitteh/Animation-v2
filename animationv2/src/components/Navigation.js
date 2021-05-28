import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navigation.css'

export default function Navigation() {
    
    return (
        <ul className="nav">
            <li>
                <span><Link to="/"><i className="fas fa-home"></i>home</Link></span>
            </li>
            <li>
                <span><Link to="/transform"><i className="fas fa-people-carry"></i>transform</Link></span>
            </li>
            <li>
                <span><Link to="/animation"><i className="fas fa-project-diagram"></i>animation</Link></span>
            </li>
            <li>
                <span><Link to="/keyframes"><i className="fas fa-wrench"></i>keyframes</Link></span>
            </li>
            <li>
                <span><Link to="/galery"><i className="fas fa-tasks"></i>galery</Link></span>
            </li>
            <li>
                <span><i className="fas fa-palette"></i>themes</span>
            </li>
        </ul>
    )
}
