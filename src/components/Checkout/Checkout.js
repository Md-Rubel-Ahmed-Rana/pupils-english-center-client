import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import "./Checkout.css"
import ReactToPdf from "react-to-pdf"
const ref = React.createRef();

const Checkout = () => {
    const { user, currentCourseInfo } = useContext(AuthContext);
    return (
        <>
        <h4 className='text-center py-2'>Thanks for Choosing Our Course</h4>
            <div ref={ref} className='checkout d-flex justify-content-between p-md-4  mt-2 rounded p-2 mx-auto text-white' style={{ backgroundColor: "#ff00c8"}}>
            <div className='border-end px-2'>
                <h6>Course info</h6>
                <p className='my-0'>Name: {currentCourseInfo.courseName}</p>
                <p>Price: ${currentCourseInfo.price}</p>
            </div>
            <div className='px-2'>
                <h5>User info</h5>
                <p className='my-0'>Name: {user?.displayName}</p>
                <p>Email: {user?.email ? user?.email : "Restcricted"}</p>
            </div>
                <p>
                    <ReactToPdf targetRef={ref} filename="course-invoice.pdf" x={40} y={50} scale={0.8}>
                        {({ toPdf }) => (
                            <button className='border bg-primary py-1 px-2 rounded text-white' onClick={toPdf}>Download Invoice</button>
                        )}
                    </ReactToPdf>
            </p>
        </div>
        </>
    );
};

export default Checkout;