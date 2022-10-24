import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import SideBar from '../SideBar/SideBar';
import "./Courses.css"

const Courses = () => {
    const courses = useFetch();
    return (
        <div className='courses px-10'>
            <SideBar />
            <div className='grid grid-cols-3 p-2 gap-5 text-center'>
                {
                    courses.map((course) => <div className='course-card shadow-xl p-2' key={course.id}>
                        <img src={course.img} alt="" />
                        <h4 className='text-xl font-bold my-2'>{course.name}</h4>
                        <Link to={`/courses/${course.id}`} className='bg-blue-900 py-1 px-2 text-white rounded'>Purchese now</Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Courses;