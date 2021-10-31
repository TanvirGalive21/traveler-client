import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <header id="banner">
            <div class="overlay">
                <div class="container p-3">
                    <div>
                        <h1><span>Traveler</span><br />Santorini 10 Days Tour </h1>
                        <p>It is a long established fact that a reader will be distracted by the readable c
                            ontent of a page when looking at its layout. The point of using Lorem Ipsum is 
                            that it has a more-or-less normal distribution of letters, as</p>
                        <button><a href="#" class="text-uppercase">book now</a></button>
                    </div>
                </div>
            </div>
        </header>
        </div>
    );
};

export default Banner;