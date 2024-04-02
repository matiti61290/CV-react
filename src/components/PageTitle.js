import React from "react";
 
const PageTitle = ({ title, description }) => {
    return(
        <div className="d-flex flex-column justify-content-center align-items-center my-5 px-1">
            <h1 className="service-offer text-center fw-semibold">{title}</h1>
            <p className="service-offer-text text-center mx-2">{description}</p>
            <hr className="horizontal-bar border-button border-5 " style={{width: '20%'}} />
        </div>
    )
}

export default PageTitle