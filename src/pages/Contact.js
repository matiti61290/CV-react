import React from "react";
import PageTitle from "../components/PageTitle";
import "../style/contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMobile } from "@fortawesome/free-solid-svg-icons";


const Contact = () => {
    return(
        <div className="background py-5">
            <div className="bg-all mx-3 mb-5 py-3 px-5 rounded">
                <PageTitle 
                title="ME CONTACTER"
                description="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le
                formulaire de contact."
                />
                <div className="container-fluid">
                    <div className="row">
                            <div className="col-12 col-sm-6">
                                <h1 className="fw-semibold">Formulaire de contact</h1>
                                <hr className="horizontal-bar border-button border-2 mb-5" style={{width: '100%'}} />
                                <form method="post">
                                    <div className=" mb-3">
                                        <input type="name" className="form-control" id="Name" placeholder="Votre nom"  />
                                    </div>
                                    <div className=" mb-3">
                                        <input type="mail" className="form-control" id="gMail" placeholder="Votre adresse email" />
                                    </div>
                                    <div className=" mb-3">
                                        <input type="tel" className="form-control" id="ingTel" placeholder="Votre numero de telephone" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="subject" className="form-control" id="Subject" placeholder="Sujet" />
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="message form-control" placeholder="Votre message" id="Message"></textarea>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <button className="btn bg-button text-white border-none rounded" type="submit">Envoyer</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12 col-sm-6">
                                <h1 className="fw-semibold mt-3 mt-sm-0">Mes coordonnées</h1>
                                <hr className="horizontal-bar border-button border-2 mb-5" style={{width: '100%'}} />
                                <div className="d-flex flex-column mb-5">
                                    <address>
                                        <FontAwesomeIcon icon={faLocationDot} /> 40 Rue Laure Deibold, 69009 <br />
                                        Lyon France <br />
                                        <FontAwesomeIcon icon={faMobile} /> 06 20 30 40 50
                                    </address>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.62696576013!2d4.796398612366586!3d45.778665712280755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1712069944709!5m2!1sfr!2sfr" 
                                    title="localization" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
                                    className="map"/>
                                </div>
                            </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact