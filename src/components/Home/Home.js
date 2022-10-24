import React from 'react';
import useFetch from '../../hooks/useFetch';
import "./Home.css"

const Home = () => {
    const courses = useFetch();
    console.log(courses);
    return (
        <div className='grid grid-cols-3 p-2 gap-5 text-center'>
            {
                courses.map((course) => <div className='course-card shadow-xl p-2' key={course.id}>
                    <img src={course.img} alt="" />
                    <h4 className='text-xl font-bold mt-2'>{course.name}</h4>
                </div>)
            }
        </div>
    );
};

export default Home;