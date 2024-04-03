import React from "react";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import "../style/footer.css"


function Footer() {
    return(
        <div className="container-fluid bg-footer">
            <div className="footer row pt-5 mb-2" >
                <div className="col-12 col-sm-6 col-md-3 ps-sm-5">
                    <strong>John Doe</strong>
                    <address className="mt-2">
                        40 Rue Laure Diebold <br />
                        69009 Lyon, France <br />
                        Telephone: 06 20 30 40 50
                    </address>
                    <div className="d-flex flex-row mb-1 gap-3">
                        <FontAwesomeIcon icon={faGithubSquare} size="2xl"/>
                        <FontAwesomeIcon icon={faTwitterSquare} size="2xl"/>
                        <FontAwesomeIcon icon={faLinkedin} size="2xl"/>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 d-flex flex-column mb-3 ps-md-5">
                    <strong>Liens utiles</strong>
                    <Link to="/" className="text-decoration-none text-dark mt-2"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />Accueil</Link>
                    <Link to="" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />A propos</Link>
                    <Link to="/service" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />Services</Link>
                    <Link to="/contact" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />Me contacter</Link>
                    <Link to="/legalnotice" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />Mentions legales</Link>
                </div>
                <div className="col-12 col-sm-6 col-md-3 d-flex flex-column mb-3 ps-sm-5 ps-md-0">
                    <strong>Mes dernieres realisations</strong>
                    <Link to="" className="text-decoration-none text-dark mt-2"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />Fresh food</Link>
                    <Link to="" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />Restaurant Akira</Link>
                    <Link to="" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />Espace bien-etre</Link>
                </div>
                <div className="col-12 col-sm-6 col-md-3 d-flex flex-column pe-sm-5">
                    <strong>Mes derniers articles</strong>
                    <Link to="" className="text-decoration-none text-dark mt-2"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />Coder son site en HTML/CSS</Link>
                    <Link to="" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />Vendre ses produits sur le web</Link>
                    <Link to="" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} style={{color: "#09aafb",}} className="me-1" />Se positionner sur Google</Link>
                </div>
                
            </div>
            <div className="copyright row mb-0" >
                <p onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="bg-title text-white text-center" style={{width: '100%'}}>&copy; Designed by John Doe</p>
            </div>
        </div>
    )
}

export default Footer