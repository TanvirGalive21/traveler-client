import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './Booking.css';
import axios from 'axios';
import AddBooing from '../AddBooking/AddBooing';


const Booking = () => {
    const [bookigs, setBookings] = useState([]);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://agile-caverns-46528.herokuapp.com/addbooking', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    useEffect( () => {
        fetch('https://agile-caverns-46528.herokuapp.com/addbooking')
        .then(res => res.json())
        .then(data => setBookings(data))
    },[]);

    return (
        <div className="add-booking container">
            <div className="row text-center">
            <h2 className="text-center text-info">Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
            <hr />
            <h2>Booking List</h2>
            {
                    bookigs.map((bookig=>
                    <AddBooing bookig={bookig}
                    
                    > 
                    </AddBooing>))
            }
            
            </div>
        </div>
    );
};

export default Booking;