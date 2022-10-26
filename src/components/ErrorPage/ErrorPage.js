import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImg from "../../images/not-found.png"

const ErrorPage = () => {
    return (
        <div className='bg-danger w-50 text-white mx-auto text-center p-3 mt-2 rounded'>
            <img style={{height: "50%", width: "50%"}} src={ErrorImg} alt="" />
            <h3>Oops!</h3>
            <p>Sorry, The page you have requested is not found. Please try again with correct url/route.</p>
            <Link to="/">
                <button className="btn btn-primary">Go Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;