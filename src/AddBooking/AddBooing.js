import React from 'react';
import { Table } from 'react-bootstrap';

const AddBooing = (props) => {
    const { img, name, price, description } = props.bookig || {}
    return (
        <div className="container">
            <hr />
        <p>{name}, {description}, {price}, {img}</p>
    </div>
    );
};

export default AddBooing;