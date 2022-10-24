import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const SideBar = () => {
    const courseName = useFetch()
    return (
        <div className='border-r-2'>
            {
                courseName.map((course) => <Link to={`/courses/${course.id}`} className="block mt-3" key={course.id}>{course.name}</Link>)
            }
        </div>
    );
};

export default SideBar;