import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData().details[0]
    return (
        <div className='border-2 w-1/2 mt-2 mx-auto rounded pb-3'>
            <div className='p-2'>
                <div className='flex justify-around'>
                    <div>
                        <img src={course.img} alt="" />
                    </div>
                    <div>
                        <h4 className='font-bold'>{course.name}</h4>
                        <button className='bg-gray-400 rounded py-1 px-5 font-bold text-center mt-5'>Download</button>
                    </div>
                </div>
                <p className='px-7 my-1'>{course.description}</p>
                <p className='bg-blue-900 py-1 px-2 text-white rounded w-56 text-center mx-auto mt-2'>
                    <Link to="/checkout" >Get Premium Access</Link>
                </p>
            </div>
        </div>
    );
};

export default CourseDetails;