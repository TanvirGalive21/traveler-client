import React, { useEffect, useState } from 'react';
import ServiceContent from '../ServiceContent/ServiceContent';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);


    useEffect( () => {
        fetch('https://agile-caverns-46528.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div id="services" className="gtco-section">
            <div className="gtco-container container m-5">
                <div className="row">
                    <div className="col md-8 col-md-offset-2 text-center gtco-heading">
                    <h2>Most Popular Destination</h2>
					<p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                    </div>
                </div>
                <div className="row">
                {
                    services.map((service=>
                    <ServiceContent service={service}
                    
                    > 
                    </ServiceContent>))
                }
                </div>
            </div>
        </div>

        // <div className="container">
        //     <div className="row">
        //         {
        //             services.map((service=>
        //             <ServiceContent service={service}
                    
        //             > 
        //             </ServiceContent>))
        //         }
        //     </div>
            
        // </div>
    );
};

export default Services;