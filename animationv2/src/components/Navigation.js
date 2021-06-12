import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/navigation.css'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export default function Navigation() {
    const links = [{
        title: "begin",
        icon: "fas fa-play"
    },
    {
        title: "transform",
        icon: "fas fa-expand-arrows-alt"
    },
    {
        title: "animation",
        icon: "fas fa-project-diagram"
    },
    {
        title: "keyframes",
        icon: "fas fa-wrench"
    },
    {
        title:"test",
        icon: "fas fa-vial"
    }
]
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav">
            <Container>
                <NavLink to="/" className="logo">GachFrames - Animation</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="CSS-Animation" id="collasible-nav-dropdown">
                            {links.map((el, counter) => {
                                return <NavLink to={`${el.title}`} key={counter}><i className={el.icon}></i>{el.title}</NavLink>
                            })}
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}