import React from 'react';
import "./Home.css";
import AwesomeSlider from 'react-awesome-slider';

import Banner from './Banner/Banner';
import Curriculum from './Curriculum/Curriculum';
import Courses from '../Courses/Courses';



const Home = () => {
    return (

       <div>
            <Banner />
            <h3 className='text-center fs-2 mt-5'>Our Courses</h3>
            <Courses />
            <Curriculum />
       </div>
        
        // <div className='mt-0'>
        //     <AwesomeSlider className="carousel">
        //         <div className='carousel-card'>
        //             <img className='img-fluid' src={Banner} alt="" />
        //         </div>
        //         <div className='carousel-card'>
        //             <img src={IELTS} alt="" />
        //         </div>
        //         <div className='carousel-card'>
        //             <img src={Graphics} alt="" />
        //         </div>
        //         <div className='carousel-card'>
        //             <img src={Spoken} alt="" />
        //         </div>
        //         <div className='carousel-card'>
        //             <img src={Computer} alt="" />
        //         </div>
        //     </AwesomeSlider>
        // </div>
    );
};

export default Home;