import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import SideBar from '../SideBar/SideBar';
import "./Courses.css"

const Courses = () => {
    const courses = useFetch();
    return (
        <div className='px-5 row'>
            <div className='col-3'>
                <SideBar />
            </div>
            <div className='courses col-9 p-2  text-center'>
                    {
                    courses.map((course) => <div className='course-card shadow-lg border p-2 rounded' key={course.id}>
                            <img className='img-fluid rounded' src={course.img} alt="" />
                            <h4 className='text-xl font-bold my-2'>{course.name}</h4>
                            <button className="btn btn-primary ">
                            <Link to={`/courses/${course.id}`} className="text-light text-decoration-none">Details</Link>
                            </button>
                        </div>)
                    }
            </div>
        </div>
    );
};

export default Courses;