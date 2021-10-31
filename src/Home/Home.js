import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import About from '../About/About';
import ResortService from '../ResortService/ResortService';


const Home = () => {
    return (
        
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <ResortService></ResortService>
            <Footer></Footer>
        </div>
    
    );
};

export default Home;