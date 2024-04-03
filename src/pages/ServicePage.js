import React from "react"
import Banner from "../components/banner"
import "../style/service.css"
import { faDesktop, faFileCode, faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ServicePage() {
    return (
        <div>
            <Banner />
            <div className="d-flex flex-column justify-content-center align-items-center my-5 px-1">
                <h1 className="service-offer text-center fw-semibold">MON OFFRE DE SERVICE</h1>
                <p className="service-offer-text text-center mx-2">Voici les prestations sur lesquelles je peux intervenir</p>
                <hr className="horizontal-bar border-button border-5 " style={{width: '20%'}} />
            </div>
            <div className="container-fluid">
                <div className="row mx-3 mb-5">
                    <div className="col-12 col-sm-4">
                        <div className="service d-flex flex-column align-items-center py-5 mt-5 bg-white rounded shadow" style={{height: '40vh'}}>
                            <FontAwesomeIcon className="icon-service" icon={faDesktop} />
                            <p className="h4 text-center fw-normal mt-3">UX DESIGN</p>
                            <p className="text-center mx-4">L'<strong>UX Design </strong>est une methode de conception centree sur l'utilisateur. Son but est d'offrir une experience de navigation
                            optimale a l'internaute.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="service d-flex flex-column align-items-center py-5 mt-5 bg-white rounded shadow" style={{height: '40vh'}}>
                            <FontAwesomeIcon className="icon-service" icon={faFileCode} />
                            <p className="h4 text-center fw-normal mt-3">DEVELOPPEMENT WEB</p>
                            <p className="text-center mx-4">Le <strong>developpement de sites web </strong> repose sur l'utilisation des
                             langages <u style={{textDecoration: 'black dotted underline'}}>
                                HTML</u>, <u style={{textDecoration: 'black dotted underline'}}>CSS</u>, Javascript et <u style={{textDecoration: 'black dotted underline'}}>PHP</u>.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="service d-flex flex-column align-items-center py-5 mt-5 bg-white rounded shadow" style={{height: '40vh'}}>
                            <FontAwesomeIcon className="icon-service" icon={faMagnifyingGlassDollar} />
                            <p className="h4 text-center fw-normal mt-3">REFERENCEMENT</p>
                            <p className="text-center mx-4">Le <strong>referencement naturel d'un site</strong>, aussi appele <u style={{textDecoration: 'black dotted underline'}}>SEO</u>
                            , consiste a mettre des techniques en oeuvre pour <i>ameliorer sa position</i> dans les moteurs de recherche.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicePage