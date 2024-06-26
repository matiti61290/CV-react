import React, {useState, useEffect } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import "../index.css"
import { useLocation } from "react-router-dom"

function Header(props) {
    const location = useLocation()
    const [user, setUser] = useState([])
    const getUsers = async() => {
        const res = await fetch("https://api.github.com/users/github-john-doe")
        const json = await res.json()
        setUser(json)
    }

    useEffect(()=>{
        getUsers()
    },
    [])

    return (
        <Navbar activeKey={location.pathname} expand="lg" bg="headerBackground" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/" className="text-start"><strong style={{fontSize: "1.5em"}}>{user.name}</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav" >
                    <Nav activeKey={location.pathname}>
                        <Nav.Link href="/" className="text-uppercase">Accueil</Nav.Link>
                        <Nav.Link href="/service" className="text-uppercase">Service</Nav.Link>
                        <Nav.Link href="/realisations" className="text-uppercase">Realisations</Nav.Link>
                        <Nav.Link href='/blog' className="text-uppercase">Blog</Nav.Link>
                        <Nav.Link href='/contact' className="text-uppercase">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header