import React from 'react';
import { useHistory } from 'react-router';
import './ServiceContent.css'

const ServiceContent = (props) => {
    const { key, image, name, price, description } = props.service || {}

    const history= useHistory()

    const handleDetails=(key)=>{
        const uri= `/placeorders/${key}`
        history.push(uri)
    }

    return (
        
        <div className="col-lg-4 col-md-4 col-sm-6 border g-3 p-2">
            <figure>
                <div className="overlay"></div>
                <img src={image} alt="Imgage" className="img-fluid" />
            </figure>
            <div className="fh5co-text">
                <h2 className="text-info">{name}</h2>
                <p>{description}</p>
                <p>price: {price}</p>
                <button onClick={()=>handleDetails(key)} className ="btn btn-warning">Order Now</button>
            </div>
        </div>
    );
};

export default ServiceContent;