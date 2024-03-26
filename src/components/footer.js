import React from "react";
import {Link} from "react-router-dom"
import "../index.css" 

function Footer() {
    return(
        <div className="container">
            <div className="row py-5" style={{backgroundColor: "#EEE"}}>
                <div className="col-12 col-sm-6 col-md-3">
                    <strong>John Doe</strong>
                    <address>
                        40 Rue Laure Diebold <br />
                        69009 Lyon, France <br />
                        Telephone: 06 20 30 40 50 <br />
                    </address>
                </div>
                <div className="col-12 col-sm-6 col-md-3 d-flex flex-column">
                    <strong>Liens utiles</strong>
                    <Link to="/" className="text-decoration-none">Accueil</Link>
                    <Link to="" className="text-decoration-none">A propos</Link>
                    <Link to="/service" className="text-decoration-none">Services</Link>
                    <Link tp="/contact" className="text-decoration-none">Me contacter</Link>
                    <Link to="/legalnotice" className="text-decoration-none">Mentions legales</Link>
                </div>
                <div className="col-12 col-sm-6 col-md-3 d-flex flex-column">
                    <strong>Mes dernieres realisations</strong>
                    <Link to="" className="text-decoration-none">Fresh food</Link>
                    <Link to="" className="text-decoration-none">Restaurant Akira</Link>
                    <Link to="" className="text-decoration-none">Espace bien-etre</Link>
                </div>
                <div className="col-12 col-sm-6 col-md-3 d-flex flex-column">
                    <strong>Mes derniers articles</strong>
                    <Link to="" className="text-decoration-none">Coder son site en HTML/CSS</Link>
                    <Link to="" className="text-decoration-none">Vendre ses produits sur le web</Link>
                    <Link to="" className="text-decoration-none">Se positionner sur Google</Link>
                </div>
            </div>
            <div className="row" style={{backgroundColor: "#1e1e1e "}}>
                <p className="text-white text-center my-auto py-2" >&copy; Designed by John Doe</p>
            </div>
        </div>
    )
}

export default Footer