import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div>
            <h3>This is checkout page</h3>
        </div>
    );
};

export default Checkout;