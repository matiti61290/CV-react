import React from "react";

const Card = ({ imageSrc, arcticleTitle, articleDescription, textButton, publishDate, alt }) => {
    return(
        <div>
            <div className="card">
                <img src={imageSrc} alt={alt} className="rounded" />
                <div className="card-body border-bottom border-2 fw-normal">
                    <h5 className="card-title fw-semibold">{arcticleTitle}</h5>
                    <p className="card-text">{articleDescription}</p>
                    <button className="button rounded bg-button text-white fw-semibold border-1 py-2 px-3">{textButton}</button>
                </div>
                <div className="card-body bg-all">
                    <p className="card-text fw-normal">{publishDate}</p>
                </div>
            </div>
        </div>
    )
}

export default Card