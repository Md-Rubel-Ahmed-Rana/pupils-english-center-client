import React, { useContext } from 'react';
import "./Home.css";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Banner from "../../images/banner.png"
import IELTS from "../../images/ielts.png"
import Graphics from "../../images/graphics-design.png"
import Spoken from "../../images/speaking.png"
import Computer from "../../images/basic-computer.png"
import { AuthContext } from '../../contexts/UserContext';



const Home = () => {
    const { dark } = useContext(AuthContext)
    return (
        <div className={`${dark ? "bg-light" : "bg-dark"}`}>
            <AwesomeSlider className="carousel mb-5">
                <div className='carousel-card'>
                    <img className='img-fluid' src={Banner} alt="" />
                </div>
                <div className='carousel-card'>
                    <img src={IELTS} alt="" />
                </div>
                <div className='carousel-card'>
                    <img src={Graphics} alt="" />
                </div>
                <div className='carousel-card'>
                    <img src={Spoken} alt="" />
                </div>
                <div className='carousel-card'>
                    <img src={Computer} alt="" />
                </div>
            </AwesomeSlider>
        </div>
    );
};

export default Home;