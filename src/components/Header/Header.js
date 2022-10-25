import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import Logo from "../../images/pupils-logo.jpg";
import "./Header.css"

const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='d-md-flex justify-content-between md-justify-center align-items-center bg-info px-5 py-1'>
            <div className='header d-flex align-items-center gap-3'>
                <img src={Logo} alt="" />
                <h5>Pupils English Center</h5>
            </div>
            <div className='d-flex gap-2'>
                <NavLink to="/home" className="text-decoration-none text-dark">Home</NavLink>
                <NavLink to="/courses" className="text-decoration-none text-dark">Courses</NavLink>
                <NavLink to="/fqa" className="text-decoration-none text-dark">FQA</NavLink>
                <NavLink to="/blogs" className="text-decoration-none text-dark">Blogs</NavLink>

                {
                    user?.uid ? <div>
                        <img src={user?.displayName} alt="" />
                    </div>
                    : <NavLink to="/login" className="text-decoration-none text-dark">Login</NavLink>
                }

                <NavLink className="text-decoration-none text-dark">Dark</NavLink>
            </div>
        </div>
    );
};

export default Header;