import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PlaceOrders = () => {

    const {id}=useParams()
    const [details,setDetails]= useState([])
    const [specificDetail,setSpecificDetail] = useState({})
   
   
 useEffect(() =>
      fetch("https://agile-caverns-46528.herokuapp.com/services")
      .then(res => res.json())
      .then(data=>setDetails(data))
    ,[])


useEffect(() =>{
    if(details.length>0){
        const matchedData= details.find(detail=> detail.key==id)
        setSpecificDetail(matchedData);
    }

}

,[details])

    return (
        <div className="container text-center p-5">
            <div className="row">
            
           <p>Name: {specificDetail?.name}</p>
           <p>price: {specificDetail?.price}</p>
           <h2 className="text-info">Please go For Booking</h2>
            </div>
        </div>
    );
};

export default PlaceOrders;