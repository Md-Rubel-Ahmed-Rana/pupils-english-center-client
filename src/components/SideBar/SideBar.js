import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const SideBar = () => {
    const courseName = useFetch()
    return (
        <div className='position-sticky top-0'>
            {
                courseName.map((course) => <div className='mt-2 bg-primary px-2 py-1 rounded fw-bold' key={course.id}>
                    <Link to={`/courses/${course.id}`} className="block text-decoration-none text-dark">{course.name}</Link>
                </div>)
            }
        </div>
    );
};

export default SideBar;