import React from "react";
import "../index.css"
import myPhoto from "../style/img/about.jpg"

function Home() {
    return (
        <div>
            <div className="bg-home d-flex flex-column justify-content-center align-items-center align-middle">
                <h1 className="text-white">Bonjour, je suis John Doe</h1>
                <h2 className="text-white">Developpeur web full stack</h2>
                <button type="button" className="btn bg-button text-white">En savoir plus</button>
            </div>
            <div className="container-fluid">
                <div className="row px-5 mt-5">
                    <div className="col-12 col-sm-6">
                        <div className="mb-4 h2 fw-bold border-bottom border-3 border-primary">
                            A propos
                        </div>
                        <p>
                            Passionne par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>integrateur-developpeur web</strong>
                            au CEF. Au cours de cette formation, j'ai pu acquerir des bases solides pour travailler dans le domaine du <strong>developpement web</strong>.
                        </p>
                        <p>
                            Base a Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>developpeur web full stack</strong>.
                        </p>
                        <p>
                            J'accorde une attention particuliere a la qualite du code que j'ecris et je respecte les bonnes pratiques du web.
                        </p>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="image-container rounded">
                            <img src={myPhoto} alt="Me" className="my-photo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home