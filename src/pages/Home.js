import React, { useRef } from "react";
import "../index.css"
import myPhoto from "../style/img/john-doe-about.jpg"

function Home() {

    const aboutMe = useRef(null)

    const scrollToAnchor = () => {
        aboutMe.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'

        })
    }
    
    
    return (
        <div>
            <div className="bg-home d-flex flex-column justify-content-center align-items-center align-middle">
                <h1 className="home-title text-white text-center fw-semibold">Bonjour, je suis John Doe</h1>
                <h2 className="home-work text-white fw-semibold">Developpeur web full stack</h2>
                <button  onClick={scrollToAnchor} className="btn bg-button text-white" >En savoir plus</button>
            </div>
            <div className="home-background pt-5 mx-sm-5 bg-all">
                <div className="container-fluid py-3 rounded bg-white shadow" ref={aboutMe}>
                    <div className="row px-5 my-5">
                        <div className="col-12 col-sm-6">
                            <div className="mb-4 h2 fw-semibold border-bottom border-3 border-primary">
                                A propos
                            </div>
                            <p className="fw-normal">
                                Passionne par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>integrateur-developpeur web </strong> 
                                au CEF. Au cours de cette formation, j'ai pu acquerir des bases solides pour travailler dans le domaine du <strong>developpement web</strong>.
                            </p>
                            <p className="fw-normal">
                                Base a Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>developpeur web full stack</strong>.
                            </p>
                            <p className="fw-normal">
                                J'accorde une attention particuliere a la qualite du code que j'ecris et je respecte les bonnes pratiques du web.
                            </p>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="container">
                                <img src={myPhoto} alt="John Doe" className="my-photo rounded" />
                            </div>
                            <div className="container mt-2 d-flex flex-column gap-3">
                                <h2 className="fw-semibold">Mes competences</h2>
                                <div className="">
                                    <p className="fw-normal">HTML5 90%</p>
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-danger" style={{width: '90%'}}></div>
                                    </div>
                                </div>
                                <div>
                                    <p className="fw-normal">CSS3 80%</p>
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-info" style={{width: '80%'}}></div>
                                    </div>
                                </div>
                                <div>
                                    <p className="fw-normal">JAVASCRIPT 70%</p>
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-warning" style={{width: '70%'}}></div>
                                    </div>
                                </div>
                                <div>
                                    <p className="fw-normal">PHP 60%</p>
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-success" style={{width: '60%'}}></div>
                                    </div>
                                </div>
                                <div>
                                    <p className="fw-normal">REACT 90%</p>
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-primary" style={{width: '50%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home