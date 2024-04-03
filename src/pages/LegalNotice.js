import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "bootstrap/js/src/collapse.js"
import PageTitle from "../components/PageTitle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMobile, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "../style.scss"
import "../style/legalNotice.css"

const LegalNotice = () => {
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
        <div>
            <head>
                <meta name="robots" content="noindex" />
            </head>
            <div>
                <PageTitle
                title="MENTION LEGALES"
                />
                <div className="mx-3 mx-sm-5 mb-4">
                    <div className="accordion" id="accordionLegalMention">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEditor" aria-expanded="true" aria-controls="collapseEditor">
                                    Editeur du site
                                </button>
                            </h2>
                            <div id="collapseEditor" className="accordion-collapse collapse show" data-bs-parent="#accordionLegalMention">
                                <div className="accordion-body">
                                    <h3>{user.name}</h3>
                                    <address>
                                        <FontAwesomeIcon icon={faLocationDot} size="lg" className="mr-2"/> 40 rue Laure Diebold <br />
                                        69009 Lyon, France <br />
                                        <FontAwesomeIcon icon={faMobile} size="lg" className="mr-2" /> <a href="tel:0620304050" target="_blank" rel="noreferrer" className="text-decoration-none">
                                            06 20 30 40 50
                                            </a> <br />
                                        <FontAwesomeIcon icon={faEnvelope} size="lg"  /><a href="mailto:john.doe@gmail.com" target="_blank" rel="noreferrer" className="text-decoration-none ms-2">
                                            john.doe@gmail.com
                                            </a>
                                    </address>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHost" aria-expanded="false" aria-controls="collapseHost">
                                    Herbergeur
                                </button>
                            </h2>
                            <div id="collapseHost" className="accordion-collapse collapse" data-bs-parent="#accordionLegalMention">
                                <div className="accordion-body">
                                    <h3>Always Data</h3>
                                    <address>
                                        91 rue du Faubourg Saint Honore <br />
                                        75008 Paris
                                    </address>
                                    <FontAwesomeIcon icon={faGlobe} size="lg" /><Link to={{pathname: "https://www.alwaysdata.com/fr/"}} target="_blank" className="text-decoration-none">www.alwaysdata.com/fr/</Link>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCredit" aria-expanded="false" aria-controls="collapseCredit">
                                    Credits
                                </button>
                            </h2>
                            <div id="collapseCredit" className="accordion-collapse collapse" data-bs-parent="#accordionLegalMention">
                                <div className="accordion-body">
                                    <h3>Credits</h3>
                                    <p>Site developpe par Mathieu Barbey, etudiant du CEF.</p>
                                    <p>Les images libres de droit sont issues du site <Link to={{pathname: "https://pixabay.com/fr/"}} target="_blank" className="text-decoration-none">pixabay</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LegalNotice