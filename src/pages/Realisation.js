import React from "react"
import Banner from "../components/banner"
import freshFood from '../style/img/portfolio/fresh-food.jpg'
import restoAkira from '../style/img/portfolio/restaurant-japonais.jpg'
import espaceBienEtre from '../style/img/portfolio/espace-bien-etre.jpg'

function Realisation() {
    return(
        <div>
            <Banner />
            <div className="d-flex flex-column justify-content-center align-items-center my-5 px-1">
                <h1 className="service-offer text-center fw-semibold">PORTFOLIO</h1>
                <p className="service-offer-text text-center mx-2">Voici quelques-unes de mes réalisations</p>
                <hr className="horizontal-bar border-button border-5 " style={{width: '20%'}} />
            </div>
            <div className="container-fluid">
                <div className="row d-lg-flex flex-lg-row justify-content-lg-center mb-5">
                    <div className="col-12 col-sm-6 col-lg-3 mb-4">
                        <div className="card">
                            <img src={freshFood} alt="fresh Food" />
                            <div className="card-body border-bottom border-2 d-flex flex-column align-items-center px-5 text-center fw-normal">
                                <h5 className="card-title fw-semibold">Fresh Food</h5>
                                <p className="card-text">Réalisation d'un site de commande en ligne.</p>
                                <button className="button rounded bg-white text-button fw-semibold border-button border-1 py-1 px-2">Voir</button>
                            </div>
                            <div className="card-body bg-all">
                                <p className="card-text text-center fw-normal">Site réalisé avec PHP et MySQL</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 mb-4">
                        <div className="card">
                            <img src={restoAkira} alt="Restaurant Akira" />
                            <div className="card-body border-bottom border-2 d-flex flex-column align-items-center px-5 text-center fw-normal">
                                <h5 className="card-title fw-semibold">Restaurant Akira</h5>
                                <p className="card-text">Réalisation d'un site vitrine.</p>
                                <button className="button rounded bg-white text-button fw-semibold border-button border-1 py-1 px-2">Voir</button>
                            </div>
                            <div className="card-body bg-all">
                                <p className="card-text text-center fw-normal">Site réalisé avec WordPress</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="card">
                            <img src={espaceBienEtre} alt="Espace bien-etre" />
                            <div className="card-body border-bottom border-2 d-flex flex-column align-items-center px-5 text-center fw-normal">
                                <h5 className="card-title fw-semibold">Espace bien-être</h5>
                                <p className="card-text">Réalisation d'un site vitrine pour un practicien de bien-être.</p>
                                <button className="button rounded bg-white text-button fw-semibold border-button border-1 py-1 px-2">Voir</button>
                            </div>
                            <div className="card-body bg-all">
                                <p className="card-text text-center fw-normal">Site réalisé en HTML/CSS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Realisation