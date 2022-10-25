import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import "./CourseDetails.css";
import ReactToPdf from "react-to-pdf"
const ref = React.createRef();

const CourseDetails = () => {
    const course = useLoaderData().details[0]
    return (
        <div ref={ref} className='details-container border mt-2 px-2 mx-auto rounded pb-3'>
            <div className='p-2'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h5 className='font-bold'>Welcome to our <small className='text-decoration-underline text-primary'>{course.name}</small> course.</h5>
                    <p>
                        <ReactToPdf targetRef={ref} filename="course-invoice.pdf">
                            {({ toPdf }) => (
                                <button className='border bg-primary py-1 px-2 rounded text-white' onClick={toPdf}>Download</button>
                            )}
                        </ReactToPdf>
                    </p>
                </div>
                <div className='header-img'>
                    <img className='w-100 rounded' src={course.img} alt="" />
                </div>
                <p className='px-3 my-1'>{course.description} <Link to="/courses">Go Back</Link></p>
                <div className='text-center mt-2'>
                    <button className='btn btn-primary btn-primium'>
                        <Link to="/checkout" className='text-light text-decoration-none' >Get Premium Access</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;