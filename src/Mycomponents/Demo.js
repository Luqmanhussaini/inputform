import React from 'react'

export default function Demo() {
    return (
        <>
            <div>
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner" >
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww&w=1000&q=80" width="100%" height="722wv" className="opacity-50 d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="https://images.prismic.io/indiahike/74223-Beas-Kund-Trek-Indiahikes-Nitesh-Kumar.jpg?auto=compress,format&rect=0,152,2560,1523&w=2560&h=1523" className=" opacity-50 d-block w-100" width="100%" height="722wv" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80" className=" opacity-50 d-block w-100" width="100%" height="722wv" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>



        </>
    )
}
