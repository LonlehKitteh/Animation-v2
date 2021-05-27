import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navigation.css'

export default function Navigation() {
    
    return (
        <ul className="nav">
            <li><Link to="/"><i className="fas fa-home"></i>Home</Link></li>
            <li><Link to="/transform"><i className="fas fa-people-carry"></i>transform</Link></li>
            <li><Link to="/animation"><i className="fas fa-project-diagram"></i>aniamtion</Link></li>
            <li><Link to="/keyframes"><i className="fas fa-wrench"></i>keyframes</Link></li>
            <li><Link to="/galery"><i className="fas fa-tasks"></i>galery</Link></li>
        </ul>
    )
}
