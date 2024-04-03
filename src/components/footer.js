import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import "../style/footer.css"


function Footer() {
    const twitter = 'https://twitter.com/Mathieu61290'
    const linkedin = 'https://www.linkedin.com/in/mathieu-barbey-bb0559228/' 
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

    return(
        <div className="container-fluid bg-footer">
            <div className="footer row pt-5 mb-2" >
                <div className="col-12 col-sm-6 col-md-3 ps-sm-5">
                    <strong>{user.name}</strong>
                    <address className="mt-2">
                        40 Rue Laure Diebold <br />
                        69009 Lyon, France <br />
                        Telephone: 06 20 30 40 50
                    </address>
                    <div className="d-flex flex-row mb-1 gap-3">
                        <a href="{user.html_url}" target="_blank"><FontAwesomeIcon icon={faGithubSquare} size="2xl" className="text-dark"/></a>
                        <a href={twitter}><FontAwesomeIcon icon={faTwitterSquare} size="2xl" className="text-dark" /></a>
                        <a href={linkedin}><FontAwesomeIcon icon={faLinkedin} size="2xl" className="text-dark" /></a>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 d-flex flex-column mb-3 ps-md-5">
                    <strong>Liens utiles</strong>
                    <p className="mb-0"><Link to="/" className="text-decoration-none text-dark mt-2"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />Accueil</Link></p>
                    <p className="mb-0"><Link to="" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />A propos</Link></p>
                    <p className="mb-0"><Link to="/service" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />Services</Link></p>
                    <p className="mb-0"><Link to="/contact" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />Me contacter</Link></p>
                    <p className="mb-0"><Link to="/legalnotice" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />Mentions legales</Link></p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 d-flex flex-column mb-3 ps-sm-5 ps-md-0">
                    <strong>Mes dernieres realisations</strong>
                    <p className="mb-0"><Link to="" className="text-decoration-none text-dark mt-2"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />Fresh food</Link></p>
                    <p className="mb-0"><Link to="" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />Restaurant Akira</Link></p>
                    <p className="mb-0"><Link to="" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />Espace bien-etre</Link></p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 d-flex flex-column pe-sm-5">
                    <strong>Mes derniers articles</strong>
                    <p className="mb-0"><Link to="" className="text-decoration-none text-dark mt-2"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />Coder son site en HTML/CSS</Link></p>
                    <p className="mb-0"><Link to="" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />Vendre ses produits sur le web</Link></p>
                    <p className="mb-0"><Link to="" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />Se positionner sur Google</Link></p>
                </div>
                
            </div>
            <div className="row mb-0" >
                <p onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="copyright-area py-3 text-white text-center" style={{width: '100%'}}>&copy; Designed by {user.name}</p>
            </div>
        </div>
    )
}

export default Footer