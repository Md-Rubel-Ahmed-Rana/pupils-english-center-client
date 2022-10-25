import React from 'react';
import "./Home.css";
import Banner from "../../images/banner.png"

const Home = () => {
    return (
        <div className='container'>
            <div>
                <img src={Banner} alt="" />
            </div>
        </div>
    );
};

export default Home;