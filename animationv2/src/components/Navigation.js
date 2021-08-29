import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/navigation.css'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import { links } from '../js/links'

export default function Navigation() {
    var keycounter = 100

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav">
            <Container>
                <NavLink exact to="/" className="logo">GachFrames - Animation</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {links.map((el, counter) => {
                            return (<NavDropdown key={counter} title={el[0]} id={`collasible-nav-dropdown ${counter}`}>
                                {el.map(element => {
                                    if (typeof element === 'object' && element !== null) {
                                        var id = element.id || ''
                                        return <NavLink to={`${element.title}${id}`} key={keycounter++}><i className={element.icon}></i>{element.title}</NavLink>
                                    }
                                    return null
                                })}
                            </NavDropdown>)
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
                    <Nav className="loginpanel">
                        <NavLink to="/login"><Button variant="primary">Log In</Button></NavLink>
                        <NavLink to="/sign in"><Button variant="success">Sign In</Button></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}