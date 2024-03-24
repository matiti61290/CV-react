import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import "../index.css"

function Header() {
    return (
        <Navbar expand="lg" bg="headerBackground" data-bs-theme="dark">
            <Container>
                <Navbar.Brand className="text-start h1"><strong>John Doe</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav" >
                    <Nav>
                        <Nav.Link href="/">Accueil</Nav.Link>
                        <Nav.Link>Service</Nav.Link>
                        <Nav.Link>Realisations</Nav.Link>
                        <Nav.Link>Blog</Nav.Link>
                        <Nav.Link>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header