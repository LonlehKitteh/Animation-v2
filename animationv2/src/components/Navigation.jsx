import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import '../css/navigation.css'
import { Navbar, Container, Nav, NavDropdown, Button, Alert } from 'react-bootstrap'
import { links } from '../js/links'
import { useAuth } from './context/AuthContext'

export default function Navigation() {
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav">
            <Container>
                <NavLink exact to="/" className="logo"><i className="fas fa-home"></i>Home</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {links.map((link, counter) => {
                            return <NavDropdown key={counter} title={link[0]} id={`collasible-nav-dropdown ${counter}`}>
                                {link.map((element, index) => {
                                    if (typeof element === 'object' && element.hasOwnProperty('titles')) {
                                        return <div className="subtitle" key={`${counter}-${index}`}><span><i className={element.icon}></i>{element.mainTitle}</span>
                                            {(typeof element === 'object' && element.hasOwnProperty('titles')) ? element.titles.map((subtitle, key) => {
                                                return <NavLink to={subtitle} key={`${counter}-${key}`}>{subtitle}</NavLink>
                                            }) : null}
                                        </div>
                                    } 
                                     if(typeof element !== 'string') return <NavLink key={`${counter}-${index}`} to={`${element.mainTitle}${element.id || ''}`}><i className={element.icon}></i>{element.mainTitle}</NavLink>
                                    return null
                                })}
                            </NavDropdown>
                        })}
                        <Nav className="galery">
                            <NavLink to="/galery"><i className="fas fa-camera"></i>Galery</NavLink>
                        </Nav>
                        <Nav className="themes">
                            <NavDropdown title="Themes" id="collasible-nav-dropdown">
                                <Nav.Item><span className="black"></span>black</Nav.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className="galery">
                            <NavLink to="/creator"><i className="fas fa-tools"></i>Creator</NavLink>
                        </Nav>
                    </Nav>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {
                        (currentUser && currentUser.displayName) ? <Nav className="loginpanel">
                            <Button onClick={handleLogout} variant="primary">Log out</Button>
                            <div className="account"><NavLink to="/update profile" >{currentUser.displayName}<i className="fas fa-user"></i></NavLink></div>
                        </Nav> :
                            <Nav className="loginpanel">
                                <NavLink to="/login"><Button variant="primary">Sign In</Button></NavLink>
                                <NavLink to="/signup"><Button variant="success">Sign Up</Button></NavLink>
                            </Nav>
                    }
                </Navbar.Collapse>
                <Nav className="version"><span>1.3</span><i className="fas fa-copyright"></i></Nav>
            </Container>
        </Navbar>
    )
}