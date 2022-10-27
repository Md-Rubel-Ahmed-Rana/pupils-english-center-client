import React  from 'react';
import { Vortex } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import SideBar from '../SideBar/SideBar';
import "./Courses.css"

const Courses = () => {
    const courses = useFetch();
    
    return (
        <div className='px-5 row'>
            { 
                 courses.length === 0 ? <div className='text-center'>
                    <h1>Data Loading</h1>
                    <Vortex
                        visible={true}
                        height="100"
                        width="100"
                        ariaLabel="vortex-loading"
                        wrapperStyle={{}}
                        wrapperClass="vortex-wrapper"
                        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                    />
                </div>
                    : <> <div className='col-lg-3'>
                <SideBar />
            </div>
            <div className='courses col-lg-9 p-2  text-center'>
                    {
                    courses.map((course) => <div 
                    className='course-card shadow-lg border p-2 rounded' 
                    key={course.id}
                    >
                            <img className='img-fluid rounded' src={course.img} alt="" />
                            <div className='d-flex justify-content-between align-items-center px-2'>
                                <h5 className='text-xl font-bold my-2'>{course.name}</h5>
                            <h5 className='text-xl font-bold my-2'>Price: ${course.price}</h5>
                            </div>
                            
                            <Link to={`/courses/${course.id}`} className="text-light text-decoration-none btn btn-primary w-100">Details</Link>
                        </div>)
                    }
                </div>
                </>
            }
        </div>
    );
};

export default Courses;