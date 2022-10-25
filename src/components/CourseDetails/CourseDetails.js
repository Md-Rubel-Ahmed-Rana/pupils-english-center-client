import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData().details[0]
    return (
        <div className='border w-50 mt-2 mx-auto rounded pb-3'>
            <div className='p-2'>
                <div className='d-flex justify-content-around'>
                    <div>
                        <img className='rounded' src={course.img} alt="" />
                    </div>
                    <div>
                        <h4 className='font-bold'>{course.name}</h4>
                        <button className='bg-gray-400 rounded py-1 px-5 font-bold text-center mt-5'>Download</button>
                    </div>
                </div>
                <p className='px-3 my-1'>{course.description}</p>
                <div className='text-center mt-2'>
                    <button className='btn btn-primary w-50'>
                        <Link to="/checkout" className='text-light text-decoration-none' >Get Premium Access</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;