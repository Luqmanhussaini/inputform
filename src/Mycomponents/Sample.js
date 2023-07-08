import React from 'react'

export default function Sample(props) {
    return (
        <div>
            <div className="card container-xxl my-5 py-5 offset-md-4" style={{width: "30rem", height:"25rem"}}>
                <div className="card-body">
                    <h5 className="card-title fw-bold text-body-secondary fs-2 text-center">Welcome</h5>
                    <h6 className="card-subtitle my-3  fs-1">{props.name}</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="card-link">Card link</a>
                    <a href="/" className="card-link">Another link</a>
                </div>
            </div>
            
        </div>
    )
}
