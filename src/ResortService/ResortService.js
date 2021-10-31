import React from 'react';
import firstimg from '../images/pic2.jpg';
import secondimg from '../images/pic3.jpg';
import thirdimg from '../images/pic4.jpg';
const ResortService = () => {
    return (
        <div className="container">
            <h2>Enjoy <span>Resort</span></h2>
            It is a long established fact that a reader will be distracted by the readable content of a o
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                <img src={firstimg} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                <img src={secondimg} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src={thirdimg} class="d-block w-100" alt="..." />
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        
    );
};

export default ResortService;