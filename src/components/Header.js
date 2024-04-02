import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import "../index.css"
import { useLocation } from "react-router-dom"

function Header(props) {
    const location = useLocation()

    return (
        <Navbar activeKey={location.pathname} expand="lg" bg="headerBackground" data-bs-theme="dark">
            <Container>
                <Navbar.Brand className="text-start"><strong style={{fontSize: "1.5em"}}>John Doe</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav" >
                    <Nav activeKey={location.pathname}>
                        <Nav.Link href="/">Accueil</Nav.Link>
                        <Nav.Link href="/service">Service</Nav.Link>
                        <Nav.Link href="/realisations">Realisations</Nav.Link>
                        <Nav.Link href='/blog'>Blog</Nav.Link>
                        <Nav.Link>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header